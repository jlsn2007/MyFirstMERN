//Array de metodos (C R U D )
const employeesControllers = {};
import employeesModel from "../models/Employees.js"

//Select
employeesControllers.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
}

//Insert
employeesControllers.postEmployees = async (req, res) => {
    const { name, lastname, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const newEmployees = new employeesModel ({ name, lastname, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified })
    await newEmployees.save()
    res.json({message: "Employee Insert"})
}

//Delete
employeesControllers.deleteEmployees = async (req, res) => {
    await employeesModel.findOneAndDelete(req.params.id)
    res.json({message: "Employee Deleted"})
}

//Update
employeesControllers.putEmployees = async (req, res) => {
    const {name, lastname, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;

    await customersModel.findByIdAndUpdate(req.params.id, {
        name,
        lastname,
        birthday,
        email,
        address,
        hireDate,
        password,
        telephone,
        dui,
        isssNumber,
        isVerified
    }, {new: true}
);
res.json({ message: "Employee Updated"});
}

export default employeesControllers