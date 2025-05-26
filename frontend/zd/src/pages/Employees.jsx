import React, { useEffect } from "react";
import RegisterEmployees from "../components/Employees/RegisterEmployees";
import ListEmployees from "../components/Employees/Employeeslist";
import { Toaster } from "react-hot-toast";
import useDataEmployees from "../components/Employees/hooks/useDataEmployees";

const Employees = () => {
  useEffect(() => {
    document.title = "Empleados";
  }, []);

  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    lastname,
    setLastname,
    birthdate,
    setBirthdate,
    email,
    setEmail,
    address,
    setAddress,
    hireDate,
    setHireDate,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    isssNumber,
    setIsssNumber,
    isVerified,
    setIsVerified,
    errorEmpleado,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
  } = useDataEmployees();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Empleados</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "list" ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Lista de empleados
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "form" ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar Empleados
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <ListEmployees
                setId={setId}
                setActiveTab={setActiveTab}
                updateEmployee={updateEmployee}
                handleUpdate={handleUpdate}
                deleteEmployee={deleteEmployee}
                employees={employees}
                loading={loading}
              />
            )}
            {activeTab === "form" && (
              <RegisterEmployees
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                lastname={lastname}
                setLastName={setLastname}
                birthdate={birthdate}
                setBirthdate={setBirthdate}
                email={email}
                setEmail={setEmail}
                address={address}
                setAddress={setAddress}
                hireDate={hireDate}
                setHireDate={setHireDate}
                password={password}
                setPassword={setPassword}
                telephone={telephone}
                setTelephone={setTelephone}
                dui={dui}
                setDui={setDui}
                isssNumber={isssNumber}
                setIsssNumber={setIsssNumber}
                isVerified={isVerified}
                setIsVerified={setIsVerified}
                errorEmpleado={errorEmpleado}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                employees={employees}
                setEmployees={setEmployees}
                cleanData={cleanData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
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

export default Employees;
