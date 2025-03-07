/*
    Campos:
       nombre
       descripcion
       precio
       stock

*/

import { Schema, model} from "mongoose";

const productsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    descriptiom: {
        type: String
    },
    precio: {
        type: Number,
        require: true,
        min: 0
    },
    name: {
        type: Number,
        require: true,
        min: 0
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Product", productsSchema)