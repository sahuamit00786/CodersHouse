const otpService = require('../services/otp-service')
const hashService = require('../services/hash-service')
const userService = require('../services/userService')
const tokenService = require('../services/token-service')
const UserDto = require('../dtos/user-dtos')

function AuthController(){
    return{
        async sendOtp(req,res){
            // console.log(req.body)
            const {phone} = req.body;
            if(!phone)
            {
                return res.status(400).json({message:"phone field is required"})
            }

            // generate otp
            const otp = await otpService().generateOtp()

            // hash
            const ttl = 1000 * 60 * 2; //2 min
            const expires = Date.now() + ttl ;
            const data = `${phone}.${otp}.${expires}`;
            const hashedOtp = hashService().hashOtp(data)

            // send OTP
            try {
                // await otpService().sendBySms(phone,otp);
               return res.json({
                    hash:`${hashedOtp}.${expires}`,
                    phone,
                    otp
                })
            } catch (error) {
                console.log(error);
                return res.status(500).json({message:"failed"})
            }

        },

        async verifyOtp(req,res){

            const {otp,hash,phone} = req.body 

            if(!otp || !hash || !phone)
            {
                res.status(400).json({message:'All fields are required'});
            }

            const[hashedOtp, expires] = hash.split('.');
            if(Date.now() > +expires)
            {
                res.status(400).json({message:'OTP expired'})
            }

            const data =`${phone}.${otp}.${expires}`;
            const computedHash = hashService().hashOtp(data)

            const isValid = otpService().verifyOtp(hashedOtp, computedHash);

            if(!isValid)
            {
                res.status(400).json({message:'otp is not valid'})
            }
            
            let user;

            // create an user
            try {
                user = await userService().findUser({phone})
                if(!user)
                {
                    user = await userService().createUser({phone})
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({message:'Db error'})
            }

            // Token
            const {accessToken,refreshToken} = tokenService().generateTokens({_id:user._id, activated:false});

            // storing tokens in the database
            await tokenService().storeRefreshToken(refreshToken,user._id)

            res.cookie('refreshToken',refreshToken,{  //name of cookie
                maxAge:1000 * 60 * 60 * 24 * 30,
                httpOnly:true  //isse javascript id cookie read nhi kr payegi sirf server read kr payega
             })  

             res.cookie('accessToken',accessToken,{  //name of cookie
                maxAge:1000 * 60 * 60 * 24 * 30,
                httpOnly:true  //isse javascript id cookie read nhi kr payegi sirf server read kr payega
             })

             const userDto = new UserDto(user);
             
             return res.json({accessToken,user:userDto,auth:true})

        } 

    }
}

module.exports = AuthController