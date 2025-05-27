import React, { useEffect } from "react";
import RegisterCustomers from "../components/Customers/RegisterCustomers";
import CustomersList from "../components/Customers/CustomersList";
import { Toaster } from "react-hot-toast";
import useDataCustomers from "../components/Customers/hooks/useDataCustomers";

const Customers = () => {
  const {
    activeTab,
            setActiveTab,
            id,
            setId,
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
            setCustomers,
            loading,
            setLoading,
            saveCustomers,
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
              className={`px-4 py-2 ${
                activeTab === "list" ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Lista de Clientes
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "form" ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
              onClick={() => {
                setActiveTab("form");
              }}
            >
              Agregar Cliente
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <CustomersList
                customers={customers}
                loading={loading}
                updateCustomers={updateCustomers}
                deleteCustomers={deleteCustomers}
              />
            )}
            {activeTab === "form" && (
              <RegisterCustomers
                id={id}
                setId={setId}
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
                loading={loading}
                setLoading={setLoading}
                customers={customers}
                setCustomers={setCustomers}
                saveCustomers={saveCustomers}
                handleEdit={handleEdit}
              />
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
