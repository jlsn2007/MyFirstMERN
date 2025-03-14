import { Schema, model} from "mongoose";

const customersSchema = new Schema({
name: {
    type: String,
    require: true
},
lastname: {
    type: String,
    require: true
},
birthday: {
    type: Date,
    require: true,
    min: 0
},
email: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true
},
telephone: {
    type: Number,
    require: true
},
dui: {
    type: Number,
    require: true,
},
isVerified: {
    type: Boolean,
    require: true,
}
}, {
    timestamps: true,
    strict: false
})

export default model("Customers", customersSchema)