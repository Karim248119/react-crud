import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";

export default function App() {
  const initialProducts = JSON.parse(localStorage.getItem("products")) || [];
  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    desc: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    initialProducts.map((product, index) => ({ ...product, index }))
  );
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    setFilteredProducts(
      products
        .map((product, index) => ({ ...product, index })) // Add original index to each product
        .filter((product) => product.name.toLowerCase().includes(searchQuery))
    );
  }, [products, searchQuery]);

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const EditProduct = (index) => {
    setFormData(products[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const searchProduct = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    const updatedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(updatedProduct);
  };

  return (
    <div>
      <Form
        products={products}
        setProducts={setProducts}
        formData={formData}
        setFormData={setFormData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <SearchBar searchProduct={searchProduct} />
      <Table
        products={filteredProducts}
        deleteProduct={deleteProduct}
        EditProduct={EditProduct}
      />
    </div>
  );
}
