import React, { useState, useEffect } from "react";
import CustomersList from "../components/Customers/CustomersList";
import RegisterCustomers from "../components/Customers/CustomersList";
import useDataCustomers from "../components/Customers/hooks/useDataCustomers";
import {Toaster} from 'react-hot-toast';

const Customers = () => {
  const {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    lastname,
    setLastname,
    birthday,
    setBirthday,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    isVerified,
    setIsVerified,
    customers,
    loading,
    saveCustomer,
    deleteCustomers,
    updateCustomers,
    handleEdit,
  } = useDataCustomers();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => setActiveTab("list")}
            >
              Lista de Clientes
            </button>
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => {
                setActiveTab("form");
              }}
            >
              Agregar Clientes
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <CustomersList
                  customers={customers}
                  loading={loading}
                  updateCustomers={updateCustomers}
                  deleteCustomers={deleteCustomers}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterCustomers
                  id={id}
                  name={name}
                  setName={setName}
                  lastname={lastname}
                  setLastname={setLastname}
                  birthday={birthday}
                  setBirthday={setBirthday}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  telephone={telephone}
                  setTelephone={setTelephone}
                  dui={dui}
                  setDui={setDui}
                  isVerified={isVerified}
                  setIsVerified={setIsVerified}
                  saveCustomer={saveCustomer}
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

export default Customers;
