import React from "react";
import Button from "../Button";

const RegisterEmployees = ({
  id,
  name,
  setName,
  lastName,
  setLastName,
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
  handleSubmit,
  handleUpdate,
}) => {
  const handleForm = (e) => {
    e.preventDefault();
    id ? handleUpdate(e) : handleSubmit(e);
  };

  return (
    <form
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5"
      onSubmit={handleForm}
    >
      <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">
        {id ? "Editar Empleado" : "Registrar Empleado"}
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Emilio"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Apellido</label>
          <input
            type="text"
            id="lastName"
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Ramirez"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="emilio@gmail.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="********"
            required
            minLength={8}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telephone" className="block text-gray-700 font-bold mb-2">Teléfono</label>
          <input
            type="tel"
            id="telephone"
            value={telephone || ""}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="77556666"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dui" className="block text-gray-700 font-bold mb-2">DUI</label>
          <input
            type="text"
            id="dui"
            value={dui || ""}
            onChange={(e) => setDui(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="12345678-1"
            required
          />
        </div>

        <div className="mb-4 col-span-2">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Dirección</label>
          <input
            type="text"
            id="address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Calle Principal #123, San Salvador"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-gray-700 font-bold mb-2">Fecha de Nacimiento</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate || ""}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hireDate" className="block text-gray-700 font-bold mb-2">Fecha de Contratación</label>
          <input
            type="date"
            id="hireDate"
            value={hireDate || ""}
            onChange={(e) => setHireDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4 col-span-2">
          <label htmlFor="isssNumber" className="block text-gray-700 font-bold mb-2">Número de ISSS</label>
          <input
            type="text"
            id="isssNumber"
            value={isssNumber || ""}
            onChange={(e) => setIsssNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="987957321"
            required
          />
        </div>

        <div className="mb-4 col-span-2">
          <label htmlFor="isVerified" className="block text-gray-700 font-bold mb-2">Verificado</label>
          <select
            id="isVerified"
            value={isVerified ? "true" : "false"  || ""}
            onChange={(e) => setIsVerified(e.target.value === "true")}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          type="submit"
          label={id ? "Editar Información" : "Registrar"}
          colorClass={id ? "warning" : "primary"}
        />
      </div>
    </form>
  );
};

export default RegisterEmployees;
