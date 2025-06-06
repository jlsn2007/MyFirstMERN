//Array de metodos (C R U D )
const customersControllers = {};
import customersModel from "../models/Customers.js"

//Select
customersControllers.getCustomers = async (req, res) => {
    const customers = await customersModel.find()
    res.json(customers)
}

//Insert
customersControllers.postCustomers = async (req, res) => {
    const { name, lastname, birthday, email, password, telephone, dui, isVerified } = req.body;
    const newCustomer = new customersModel({ name, lastname, birthday, email, password, telephone, dui, isVerified })
    await newCustomer.save()
    res.json({message: "Customer Insert"})
}

//Delete
customersControllers.deleteCustomers = async (req, res) => {
    await customersModel.findByIdAndDelete(req.params.id)
    res.json({message: "Customer Deleted"})
}

//Update
customersControllers.putCustomers = async (req, res) => {
    const {name, lastname, birthday, email, password, telephone, dui, isVerified} = req.body;

    await customersModel.findByIdAndUpdate(req.params.id, {
        name,
        lastname,
        birthday,
        email,
        password,
        telephone,
        dui,
        isVerified
    }, {new: true}
);
res.json({ message: "Customer Updated"});
}

export default customersControllers