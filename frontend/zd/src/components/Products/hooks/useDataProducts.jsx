import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';


const useDataProducts = () => {

    const ApiProducts ="http://localhost:4000/api/products";
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [price, setPrice] = useState(0);
      const [stock, setStock] = useState(0);
      const [loading, setLoading] = useState(false);
      const [products, setProducts] = useState([]);

      const fetchProducts = async () => {
        const response = await fetch(ApiProducts);
            if (!response.ok) {
                throw new Error("Hubo un error al obtener los productos");
            }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        };

        useEffect(() => {
            fetchProducts();
        }, []);
    
      const saveProduct = async (e) => {
        e.preventDefault();

        if (!name || !description || !price || !stock) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const newProduct = {
            name,
            description,
            price,
            stock,
         };

            const response = await fetch(ApiProducts, {
                method: "POST",
                 headers: { "Content-Type": "application/json",
                 },
                credentials: "include",
                body: JSON.stringify(newProduct),
            });

        if (!response.ok) {
            throw new Error("Hubo un error al registrar el producto");
        }

    toast.success('Producto registrado');

    await fetchProducts();

    setName("");
    setDescription("");
    setPrice(0);
    setStock(0);
  } catch (error) {
    console.error("Error:", error);
    toast.error('Ocurrió un error al registrar el producto');
  } finally {
    setLoading(false);
  }
};
        
     const deleteProducts = async (id) => {
    try {
      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }
      toast.success("Producto eliminado");
      fetchProducts(); 
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error al eliminar el producto");
    }
  };
    
      const updateProducts = async (dataProduct) => {
        setId(dataProduct._id);
        setName(dataProduct.name);
        setDescription(dataProduct.description);
        setPrice(dataProduct.price);
        setStock(dataProduct.stock);
        setActiveTab("form");
      };
    
      const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editProduct = {
            name: name,
            description: description,
            price: price,
            stock: stock,
          };
    
          const response = await fetch( `${ApiProducts}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editProduct),
            });
    
          if (!response.ok) {
            throw new Error("Error al actualizar el producto");
          }

          const data = await response.json();
          toast.success('Producto actualizado');
          setProducts(data)
          setId("");
          fetchProducts();
        } catch (error) {
          console.error("Error:", errorProducto);
          alert("Error al actualizar el producto");
        } 
      };

        return {
            activeTab,
            setActiveTab,
            id,
            setId,
            name,
            setName,
            description,
            setDescription,
            price,
            setPrice,
            stock,
            setStock,
            products,
            setProducts,
            loading,
            setLoading,
            fetchProducts,
            saveProduct,
            deleteProducts,
            updateProducts,
            handleEdit,
        };
  };

export default useDataProducts;
