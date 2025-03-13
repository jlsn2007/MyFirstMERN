import { Schema, model} from "mongoose";

const subsidiariesSchema = new Schema({
name: {
    type: String,
    require: true
},
address: {
    type: String,
    require: true,
},
telephone: {
    type: Number,
    min: 8,
    require: true
},
schedule: {
    type: String,
    require: true,
}
}, {
    timestamps: true,
    strict: false
})

export default model("Subsidiaries", subsidiariesSchema)