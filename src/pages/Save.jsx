import React from "react";
import { useSave } from "../assets/contextapi/SaveContext";
import { NavLink } from "react-router-dom";

const Save = () => {
  const { savedProducts, removeSavedProduct } = useSave();

  return (
    <div className="bg-white">
      <div className="PageRatio mt-24 px-4">
        <h3 className="">Saved Products</h3>
        <div className="flex flex-col gap-6 mt-6">
          {savedProducts.length > 0 ? (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-20 h-20 object-cover"
                    src={product.filePath}
                    alt={product.name}
                  />
                  <div>
                    <h4 className="text-lg font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.price} $</p>
                  </div>
                </div>
                <button
                  onClick={() => removeSavedProduct(product.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No saved products.</p>
          )}
        </div>
        <NavLink to="/allproducts" className="mt-6 inline-block text-blue-500">
          Continue Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default Save;
