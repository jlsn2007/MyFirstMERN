import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0]; 
};

const useDataEmployees = () => {

    const ApiEmployees ="http://localhost:4000/api/employees";
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [lastname, setLastname] = useState("");
      const [birthday, setBirthday] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [hireDate, setHireDate] = useState("");
      const [password, setPassword] = useState("");
      const [telephone, setTelephone] = useState("");
      const [dui, setDui] = useState("");
      const [isssNumber, setIsssNumber] = useState("");
      const [isVerified, setIsVerified] = useState("");
      const [loading, setLoading] = useState(false);
      const [employees, setEmployees] = useState([]);

      const fetchEmployees = async () => {
        const response = await fetch(ApiEmployees);
            if (!response.ok) {
                throw new Error("Hubo un error al obtener los empleados");
            }
        const data = await response.json();
        setEmployees(data);
        setLoading(false);
        };

        useEffect(() => {
            fetchEmployees();
        }, []);
    
      const saveEmployees = async (e) => {
        e.preventDefault();

        if (
          !name       || 
          !lastname   || 
          !birthday   || 
          !email      ||
          !address    || 
          !hireDate   || 
          !password   || 
          !telephone  ||
          !dui        || 
          !isssNumber || 
          !isVerified
        ) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const newEmployee = {
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
            isVerified,
         };

            const response = await fetch(ApiEmployees, {
                method: "POST",
                 headers: { "Content-Type": "application/json",
                 },
                credentials: "include",
                body: JSON.stringify(newEmployee),
            });

        if (!response.ok) {
            throw new Error("Hubo un error al registrar el empleado");
        }

    toast.success('Empleado registrado');

    await fetchEmployees();

    setName("");
    setLastname("");
    setBirthday("");
    setEmail("");
    setAddress("");
    setHireDate("");
    setPassword("");
    setTelephone("");
    setDui("");
    setIsssNumber("");
    setIsVerified("");

  } catch (error) {
    console.error("Error:", error);
    toast.error('Ocurrió un error al registrar el empleado');
  } finally {
    setLoading(false);
  }
};
        
     const deleteEmployees = async (id) => {
    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el empleado");
      }
      toast.success("Empleado eliminado");
      fetchEmployees(); 
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Error al eliminar el employee");
    }
  };
    
      const updateEmployees = async (dataEmployee) => {
        setId(dataEmployee._id);
        setName(dataEmployee.name);
        setLastname(dataEmployee.lastname);
        setBirthday(formatDate(dataEmployee.birthday));
        setEmail(dataEmployee.email);
        setAddress(dataEmployee.address);
        setHireDate(formatDate(dataEmployee.hireDate));
        setPassword(dataEmployee.password);
        setTelephone(dataEmployee.telephone);
        setDui(dataEmployee.dui);
        setIsssNumber(dataEmployee.isssNumber);
        setIsVerified(dataEmployee.isVerified);
        setActiveTab("form");
      };
    
      const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editEmployee = {
            name: name,
            lastname: lastname,
            birthday: birthday,
            email: email,
            address: address,
            hireDate: hireDate,
            password: password,
            telephone: telephone,
            dui: dui,
            isssNumber: isssNumber,
            isVerified: isVerified,
          };
    
          const response = await fetch( `${ApiEmployees}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editEmployee),
            });
    
          if (!response.ok) {
            throw new Error("Error al actualizar el empleado");
          }

          const data = await response.json();
          toast.success('Empleado actualizado');
          setEmployees(data)
          setId("");
          fetchEmployees();
        } catch (error) {
          alert("Error al actualizar el empleado");
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
            birthday,
            setBirthday,
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
            employees,
            setEmployees,
            loading,
            setLoading,
            fetchEmployees,
            saveEmployees,
            deleteEmployees,
            updateEmployees,
            handleEdit,
        };
  };

export default useDataEmployees;
