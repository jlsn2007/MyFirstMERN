import React from 'react';

const RegisterCustomers = ({
  name, setName,
  lastname, setLastname,
  birthday, setBirthday,
  email, setEmail,
  password, setPassword,
  telephone, setTelephone,
  dui, setDui,
  isVerified, setIsVerified,
  id, saveCustomer, handleEdit
}) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nameInput">Nombre</label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Nombre"
            />
          </div>

          {/* Apellido */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastnameInput">Apellido</label>
            <input
              id="lastnameInput"
              type="text"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Apellido"
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="birthdayInput">Fecha de nacimiento</label>
            <input
              id="birthdayInput"
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="emailInput">Correo electrónico</label>
            <input
              id="emailInput"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="passwordInput">Contraseña</label>
            <input
              id="passwordInput"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="********"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="telephoneInput">Teléfono</label>
            <input
              id="telephoneInput"
              type="number"
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="77778888"
            />
          </div>

          {/* DUI */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="duiInput">DUI</label>
            <input
              id="duiInput"
              type="number"
              value={dui}
              onChange={e => setDui(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="12345678"
            />
          </div>

          {/* Verificado */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="isVerifiedInput">¿Está verificado?</label>
            <select
              id="isVerifiedInput"
              value={isVerified}
              onChange={e => setIsVerified(e.target.value === 'true')}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="false">No</option>
              <option value="true">Sí</option>
            </select>
          </div>
        </div>

        {/* Botón */}
        <div className="mt-6">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              id ? handleEdit(e) : saveCustomer(e);
            }}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {id ? "Editar Cliente" : "Registrar Cliente"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCustomers;
