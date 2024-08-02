import React from "react";

export default function Table({ products, deleteProduct, EditProduct }) {
  return (
    <div className="overflow-x-auto w-[90%] md:w-[80%] mx-auto shadow-2xl ">
      <table className="min-w-full bg-black text-center">
        <thead>
          <tr className="bg-gray-900 font-medium text-gray-200 uppercase text-xs md:text-sm">
            <th className="px-2 py-2 md:px-4 md:py-3">Name</th>
            <th className="px-2 py-2 md:px-4 md:py-3">Category</th>
            <th className="px-2 py-2 md:px-4 md:py-3">Price</th>
            <th className="px-2 py-2 md:px-4 md:py-3">Description</th>
            <th className="px-2 py-2 md:px-4 md:py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={product.index}>
              <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                {product.name}
              </td>
              <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm text-gray-500">
                {product.category}
              </td>
              <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm text-gray-500">
                ${product.price}
              </td>
              <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm text-gray-500">
                {product.desc}
              </td>
              <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm font-medium flex justify-center items-center space-x-2">
                <button
                  onClick={() => {
                    EditProduct(product.index);
                  }}
                  className="px-2 py-1 md:px-4 md:py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-xs md:text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteProduct(product.index);
                  }}
                  className="px-2 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded hover:bg-red-600 text-xs md:text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
