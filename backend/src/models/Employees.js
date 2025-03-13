import { Schema, model} from "mongoose";

const employeesSchema = new Schema({
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
address: {
    type: String,
    require: true,
},
hireDate: {
    type: Date,
    require: true,
},
password: {
    type: String,
    require: true,
    min: 8
},
telephone: {
    type: Number,
    min: 8,
    require: true
},
dui: {
    type: Number,
    require: true,
    max: 9
},
isssNumber: {
    type: Number,
    require: true,
    max: 9
},
isVerified: {
    type: Boolean,
    require: true,
}
}, {
    timestamps: true,
    strict: false
})

export default model("Employees", employeesSchema)