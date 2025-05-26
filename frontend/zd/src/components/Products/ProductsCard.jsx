import React from "react";
import Button from "../Button";

const ProductsCard = ({ product, deleteProducts, updateProducts }) => {

return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
            </h2>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Precio: </span>
                <span>${product.price}</span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Stock: </span>
                <span>{product.stock}</span>
            </div>
            
            <div className="flex gap-2 mt-4">
                <Button
                    label={"Eliminar"}
                    actionButton={() => deleteProducts(product._id)}
                    colorClass={"danger"}
                />
                <Button
                    label={"Editar Información"}
                    actionButton={() => updateProducts(product)}
                    colorClass={"warning"}
                />
            </div>
        </div>
    </div>
);
};

export default ProductsCard;