const crypto = require('crypto');

function hashService(){
    return{
        hashOtp(data){
            return crypto.createHmac('sha256',process.env.HASH_SECRET).update(data).digest('hex'); 
        }
    }
}

module.exports = hashService;