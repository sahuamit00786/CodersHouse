const UserModel = require('../models/user')

function userService(){
    return{
        async findUser(filter){
            const user = await UserModel.findOne(filter);
            return user
        },
        async createUser(data){
            const user = await UserModel.create(data);
            return user
        }
    }
}

module.exports = userService;