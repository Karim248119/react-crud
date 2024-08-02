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
    <div className="w-screen">
      <form
        id="product-form"
        className="mt-8 w-[90%] md:w-[60%] mx-auto shadow-lg text-start flex flex-col gap-2 p-4 md:p-6 text-xs "
      >
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="price" className="block font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="desc" className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            type="submit"
            id="create-btn"
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            {isEditing ? "Update" : "Create"}
          </button>
          <button
            onClick={clearForm}
            type="reset"
            id="clear-btn"
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
