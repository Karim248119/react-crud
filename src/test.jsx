import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function Form() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product_name: "",
    product_category: "",
    product_price: "",
    product_desc: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
      setFilteredProducts(storedProducts); // Initialize filtered products
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    setFilteredProducts(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [products, searchQuery]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? formData : product
      );
      setProducts(updatedProducts);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newProducts = [...products, formData];
      setProducts(newProducts);
    }
    setFormData({
      product_name: "",
      product_category: "",
      product_price: "",
      product_desc: "",
    });
  };

  const handleClear = () => {
    setFormData({
      product_name: "",
      product_category: "",
      product_price: "",
      product_desc: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const searchProducts = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div>
      <form
        id="product-form"
        className="mt-8 w-[60%] mx-auto shadow-lg text-start p-10 flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="product_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="product_category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="product_category"
            name="product_category"
            value={formData.product_category}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="product_price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="product_price"
            name="product_price"
            value={formData.product_price}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="product_desc"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="product_desc"
            name="product_desc"
            rows="3"
            value={formData.product_desc}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            id="create-btn"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isEditing ? "Update" : "Create"}
          </button>
          <button
            type="button"
            id="clear-btn"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </form>

      <SearchBar searchQuery={searchQuery} searchProducts={searchProducts} />

      <div className="mt-8 w-[60%] mx-auto">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.product_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.product_category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${product.product_price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.product_desc}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
