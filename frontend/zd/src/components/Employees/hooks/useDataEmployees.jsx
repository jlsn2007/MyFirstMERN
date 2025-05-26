import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useDataEmployees = () => {

  const ApiRegister = "http://localhost:4000/api/Registreremployees";
  const ApiEmployees = "http://localhost:4000/api/employees";

  const [activeTab, setActiveTab] = useState("list");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [isssNumber, setIsssNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const [errorEmpleado, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const cleanData = () => {
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setAddress("");
    setBirthdate("");
    setHireDate("");
    setIsssNumber("");
    setIsVerified(false);
    setId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name || !lastname || !email || !password || !telephone ||
      !dui || !address || !birthdate || !hireDate || !isssNumber || !isVerified
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    const newEmployee = {
      name,
      lastname,
      email,
      password,
      telephone: Number(telephone),
      dui: Number(dui),
      address,
      birthdate,
      hireDate,
      isssNumber: Number(isssNumber),
      isVerified,
    };

    try {
      const response = await fetch(ApiRegister, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) throw new Error("Error al registrar el empleado");

      const data = await response.json();
      toast.success("Empleado registrado");
      setSuccess("Empleado registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Ocurrió un error al registrar el empleado");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(ApiEmployees);
      if (!response.ok) throw new Error("Error en la red");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar empleado");

      toast.success("Empleado eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const updateEmployee = (dataEmployee) => {
    setId(dataEmployee._id);
    setName(dataEmployee.name);
    setLastname(dataEmployee.lastname);
    setEmail(dataEmployee.email);
    setTelephone(dataEmployee.telephone);
    setDui(dataEmployee.dui);
    setAddress(dataEmployee.address);
    setBirthdate(dataEmployee.birthdate);
    setHireDate(dataEmployee.hireDate);
    setIsssNumber(dataEmployee.isssNumber);
    setIsVerified(dataEmployee.isVerified);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedEmployee = {
      name,
      lastname,
      email,
      password,
      telephone: Number(telephone),
      dui: Number(dui),
      address,
      birthdate,
      hireDate,
      isssNumber: Number(isssNumber),
      isVerified,
    };

    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) throw new Error("Error al actualizar el empleado");

      toast.success("Empleado actualizado");
      setSuccess("Empleado actualizado correctamente");
      cleanData();
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el empleado");
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    address,
    setAddress,
    birthdate,
    setBirthdate,
    hireDate,
    setHireDate,
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
  };
};

export default useDataEmployees;
