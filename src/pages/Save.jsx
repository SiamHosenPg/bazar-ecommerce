import React from "react";
import { useSave } from "../assets/contextapi/SaveContext";
import { NavLink } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const Save = () => {
  const { savedProducts, removeSavedProduct } = useSave();

  return (
    <div className="bg-white PageRatio">
      <div className=" mt-12 px-4">
        <h3 className="">Saved Products</h3>
        <div className="flex flex-col gap-6 mt-6">
          {savedProducts.length > 0 ? (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <NavLink to={`/allproducts/${product.id}`}>
                    <img
                      className="w-24 h-24 rounded-md object-cover "
                      src={product.filePath}
                      alt={product.name}
                    />
                  </NavLink>
                  <div>
                    <NavLink to={`/allproducts/${product.id}`}>
                      <h4 className="text-lg font-medium">{product.name}</h4>
                    </NavLink>
                    <p className="text-sm text-gray-600">{product.price} $</p>
                  </div>
                </div>
                <button
                  onClick={() => removeSavedProduct(product.id)}
                  className="text-red-500 flex items-center gap-2"
                >
                  <MdDeleteOutline className="text-lg" /> Remove
                </button>
              </div>
            ))
          ) : (
            <p>No saved products.</p>
          )}
        </div>
        <NavLink to="/allproducts" className="mt-6 flex items-center">
          <FaCaretLeft className="text-lg" /> Continue Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default Save;
