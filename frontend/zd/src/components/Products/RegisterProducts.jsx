import React from 'react';

const RegisterProducts = ({name, setName, description, setDescription, price, setPrice, stock, setStock, id, saveProduct, handleEdit, }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nameInput">Nombre del producto</label>
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

          {/* Descripción */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="descriptionInput">Descripción</label>
            <input
              id="descriptionInput"
              type="text"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Descripción"
            />
          </div>

          {/* Precio */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="priceInput">Precio</label>
            <input
              id="priceInput"
              type="number"
              name="price"
              value={price}
              min={0}
              onChange={e => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="stockInput">Stock</label>
            <input
              id="stockInput"
              type="number"
              name="stock"
              value={stock}
              min={0}
              onChange={e => setStock(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>

        {/* Botón */}
        <div className="mt-6">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              id ? handleEdit(e) : saveProduct(e);
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

export default RegisterProducts;
