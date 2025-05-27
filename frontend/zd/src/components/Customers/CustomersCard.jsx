import React from "react";
import Button from "../Button";

const CustomersCard = ({ customer, deleteCustomers, updateCustomers }) => {

return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {customer.name} {customer.lastname}
            </h2>

            <div className="mb-2">
                <span className="font-semibold text-gray-700">Fecha de nacimiento: </span>
                <span>${customer.birthday}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Email: </span>
                <span>{customer.email}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Contraseña: </span>
                <span>${customer.password}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Teléfono: </span>
                <span>{customer.telephone}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">DUI: </span>
                <span>${customer.dui}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Verificado: </span>
                <span>{customer.isVerified}</span>
            </div>
            
            <div className="flex gap-2 mt-4">
                <Button
                    label={"Eliminar"}
                    actionButton={() => deleteCustomers(customer._id)}
                    colorClass={"danger"}
                />
                <Button
                    label={"Editar"}
                    actionButton={() => updateCustomers(customer)}
                    colorClass={"warning"}
                />
            </div>
        </div>
    </div>
);
};

export default CustomersCard;