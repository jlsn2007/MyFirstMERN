import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0]; 
};

const useDataCustomers = () => {

    const ApiCustomers ="https://myfirstmern.onrender.com/api/customers";
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [lastname, setLastname] = useState("");
      const [birthday, setBirthday] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [telephone, setTelephone] = useState("");
      const [dui, setDui] = useState("");
      const [isVerified, setIsVerified] = useState("");
      const [loading, setLoading] = useState(false);
      const [customers, setCustomers] = useState([]);

      const fetchCustomers = async () => {
        const response = await fetch(ApiCustomers);
            if (!response.ok) {
                throw new Error("Hubo un error al obtener los clientes");
            }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
        };

        useEffect(() => {
            fetchCustomers();
        }, []);
    
      const saveCustomers = async (e) => {
        e.preventDefault();

        if (
          !name       || 
          !lastname   || 
          !birthday   || 
          !email      || 
          !password   || 
          !telephone  ||
          !dui        ||  
          !isVerified
        ) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const newCustomer = {
            name,       
            lastname,
            birthday,  
            email,    
            password,  
            telephone,  
            dui, 
            isVerified,
         };

            const response = await fetch(ApiCustomers, {
                method: "POST",
                 headers: { "Content-Type": "application/json",
                 },
                credentials: "include",
                body: JSON.stringify(newCustomer),
            });

        if (!response.ok) {
            throw new Error("Hubo un error al registrar el cliente");
        }

    toast.success('Cliente registrado');

    await fetchCustomers();

    setName("");
    setLastname("");
    setBirthday("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setIsVerified("");

  } catch (error) {
    console.error("Error:", error);
    toast.error('Ocurrió un error al registrar el cliente');
  } finally {
    setLoading(false);
  }
};
        
     const deleteCustomers = async (id) => {
    try {
      const response = await fetch(`${ApiCustomers}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el cliente");
      }
      toast.success("Cliente eliminado");
      fetchCustomers(); 
    } catch (error) {
      console.error("Error deleting customer:", error);
      toast.error("Error al eliminar el customer");
    }
  };
    
      const updateCustomers = async (dataCustomer) => {
        setId(dataCustomer._id);
        setName(dataCustomer.name);
        setLastname(dataCustomer.lastname);
        setBirthday(formatDate(dataCustomer.birthday));
        setEmail(dataCustomer.email);
        setPassword(dataCustomer.password);
        setTelephone(dataCustomer.telephone);
        setDui(dataCustomer.dui);
        setIsVerified(dataCustomer.isVerified);
        setActiveTab("form");
      };
    
      const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editCustomer = {
            name: name,
            lastname: lastname,
            birthday: birthday,
            email: email,
            password: password,
            telephone: telephone,
            dui: dui,
            isVerified: isVerified,
          };
    
          const response = await fetch( `${ApiCustomers}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editCustomer),
            });
    
          if (!response.ok) {
            throw new Error("Error al actualizar el cliente");
          }

          const data = await response.json();
          toast.success('Cliente actualizado');
          setCustomers(data)
          setId("");
          fetchCustomers();
        } catch (error) {
          alert("Error al actualizar el cliente");
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
            fetchCustomers,
            saveCustomers,
            deleteCustomers,
            updateCustomers,
            handleEdit,
        };
  };

export default useDataCustomers;
