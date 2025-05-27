import React from "react";
import Button from "../Button";

const EmployeesCard = ({ employee, deleteEmployees, updateEmployees }) => {

return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {employee.name} {employee.lastname}
            </h2>

            <div className="mb-2">
                <span className="font-semibold text-gray-700">Fecha de nacimiento: </span>
                <span>${employee.birthday}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Email: </span>
                <span>{employee.email}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Dirección: </span>
                <span>${employee.address}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Fecha de contratación: </span>
                <span>{employee.hireDate}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Contraseña: </span>
                <span>${employee.password}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Teléfono: </span>
                <span>{employee.telephone}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">DUI: </span>
                <span>${employee.dui}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Número de seguro: </span>
                <span>{employee.isssNumber}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Verificado: </span>
                <span>{employee.isVerified}</span>
            </div>
            
            <div className="flex gap-2 mt-4">
                <Button
                    label={"Eliminar"}
                    actionButton={() => deleteEmployees(employee._id)}
                    colorClass={"danger"}
                />
                <Button
                    label={"Editar"}
                    actionButton={() => updateEmployees(employee)}
                    colorClass={"warning"}
                />
            </div>
        </div>
    </div>
);
};

export default EmployeesCard;