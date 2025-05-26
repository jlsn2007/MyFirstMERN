import React, { useState, useEffect } from "react";
import ProductsList from "../components/Products/ProductsList";
import RegisterProducts from "../components/Products/RegisterProducts";
import useDataProducts from "../components/Products/hooks/useDataProducts";
import {Toaster} from 'react-hot-toast';

const Products = () => {
  const {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    products,
    loading,
    saveProduct,
    deleteProducts,
    updateProducts,
    handleEdit,
  } = useDataProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Productos</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => setActiveTab("list")}
            >
              Lista de productos
            </button>
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => {
                setActiveTab("form");
              }}
            >
              Agregar Productos
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ProductsList
                  products={products}
                  loading={loading}
                  updateProducts={updateProducts}
                  deleteProducts={deleteProducts}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterProducts
                  id={id}
                  name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  price={price}
                  setPrice={setPrice}
                  stock={stock}
                  setStock={setStock}
                  saveProduct={saveProduct}
                  handleEdit={handleEdit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
         <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
    </div>
  );
};

export default Products;
