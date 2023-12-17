const userCntrl = {}

require("../routes/users.routes")

const user = require("../models/usersModel")

userCntrl.getUser = async(req, res) => {
    const users = await user.find()
    res.json(users)


}
userCntrl.createUser = async(req, res) => {
    const newUser = new user(req.body)
    await newUser.save()
    console.log(newUser)

    res.send({ message: "create user" })

}
userCntrl.getUserId = async(req, res) => {
    const user = await findById(req.params.id)
    res.send(user)

}

userCntrl.editUser = async(req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: "user updated" })

}
userCntrl.deleteUser = async(req, res) => {
    const user = await user.findByIdAndDelete(req.params.id)
    res.json({ status: "user deleted" })

}


module.exports = userCntrl;