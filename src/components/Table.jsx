import React from "react";

export default function Table({ products, deleteProduct, EditProduct }) {
  return (
    <table className=" w-[80%] bg-black mx-auto shadow-2xl text-center">
      <thead>
        <tr className=" bg-gray-900  font-medium text-gray-200 uppercase">
          <th className="px-6 py-3 ">Name</th>
          <th className="px-6 py-3 ">Category</th>
          <th className="px-6 py-3 ">Price</th>
          <th className="px-6 py-3 ">Description</th>
          <th className="px-6 py-3 ">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 ">
        {products.map((product, index) => (
          <tr key={product.index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {product.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {product.category}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${product.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {product.desc}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center items-center">
              <button
                onClick={() => {
                  EditProduct(product.index);
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteProduct(product.index);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
