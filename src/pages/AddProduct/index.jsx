import React from "react";
import Layout from "../../components/Layout";
function AddProduct() {
  return (
    <Layout>
      <div className="bg-white dark:bg-slate-800 dark:text-white">
        <div className="min-h-screen container">
          <div className="text-4xl text-center py-12">Add Product</div>
          <form action="">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                type="text"
                id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="file"
                id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;
