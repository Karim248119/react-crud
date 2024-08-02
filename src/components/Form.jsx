import React, { useEffect, useState } from "react";

export default function Form({
  products,
  setProducts,
  formData,
  setFormData,
  isEditing,
  setIsEditing,
  editIndex,
  setEditIndex,
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      category: "",
      price: "",
      desc: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      products[editIndex] = formData;
      setProducts([...products]);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setProducts([...products, formData]);
    }
    clearForm();
  };

  return (
    <div className=" w-screen">
      <form
        id="product-form"
        className="mt-8 md:w-[60%] w-[90%] mx-auto shadow-lg text-start  flex flex-col md:gap-1 md:p-10 p-3 gap-1 md:text-sm text-[8px]"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block  font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 md:p-3 p-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block  font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 md:p-3 p-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block  font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 md:p-3 p-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className="block  font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            rows="3"
            className="mt-1 md:p-3 p-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            type="submit"
            id="create-btn"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create
          </button>
          <button
            onClick={clearForm}
            type="reset"
            id="clear-btn"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
