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
  id, saveCustomers, 
  handleEdit,
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
              name="name"
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
              name="lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Apellido"
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="birthdayInput">Fecha de Nacimiento</label>
            <input
              id="birthdayInput"
              type="date"
              name="birthday"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="emailInput">Email</label>
            <input
              id="emailInput"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="ejemplo@correo.com"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="passwordInput">Contraseña</label>
            <input
              id="passwordInput"
              type={"password"}
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Contraseña"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="telephoneInput">Teléfono</label>
            <input
              id="telephoneInput"
              type="number"
              name="telephone"
              value={telephone}
              min={0}
              onChange={e => setTelephone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="7777-8888"
            />
          </div>

          {/* DUI */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="duiInput">DUI</label>
            <input
              id="duiInput"
              type="number"
              name="dui"
              value={dui}
              onChange={e => setDui(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="12345678-9"
            />
          </div>

          {/* Verificado */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="isVerifiedInput">¿Está verificado?</label>
            <select
              id="isVerifiedInput"
              name="isVerified"
              value={isVerified === true ? "true" : "false"}
              onChange={(e) => setIsVerified(e.target.value === "true")}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

        </div>

        {/* Botón */}
        <div className="mt-6">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              id ? handleEdit(e) : saveCustomers(e);
            }}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {id ? "Editar" : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCustomers;
