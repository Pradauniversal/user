const { Schema, model, mongo } = require("mongoose")

const userSchema = new Schema({
    name: { type: String, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false


})

module.exports = model("user", userSchema)