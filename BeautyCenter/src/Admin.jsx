import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Admin = () => {
  const auth = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const userToken = localStorage.getItem("token");

  const [selectedOperation, setSelectedOperation] = useState(null);
  const [isError, setIsError] = useState(false);

  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [admins, setAdmins] = useState([]);

  // Appointment 
  const {
    register: registerAppointment,
    handleSubmit: handleSubmitAppointment,
  } = useForm();

  const onSubmitAppointment = (data) => {
    const newData = { ...data, productName: "" };
    axios
      .post("https://localhost:7051/api/Appointment", newData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsError(false);
        fetchData();
      })
      .catch(() => setIsError(true));
  };

  // User
  const { register: registerUser, handleSubmit: handleSubmitUser } = useForm();

  const onSubmitUser = (data) => {
    axios
      .post("https://localhost:7051/api/User", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsError(false);
        fetchData();
      })
      .catch(() => setIsError(true));
  };

  // Category 
  const { register: registerCategory, handleSubmit: handleSubmitCategory } =
    useForm();

  const onSubmitCategory = (data) => {
    axios
      .post("https://localhost:7051/api/Category", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsError(false);
        fetchData();
      })
      .catch(() => setIsError(true));
  };

  // Product 
  const { register: registerProduct, handleSubmit: handleSubmitProduct } =
    useForm();

  const onSubmitProduct = (data) => {
    debugger;
    axios
      .post("https://localhost:7051/api/Product", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsError(false);
        fetchData();
      })
      .catch(() => setIsError(true));
  };

  // Admin 
  const { register: registerAdmin, handleSubmit: handleSubmitAdmin } =
    useForm();

  const onSubmitAdmin = (data) => {
    axios
      .post("https://localhost:7051/api/User", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsError(false);
        fetchData();
      })
      .catch(() => setIsError(true));
  };

  useEffect(() => {
    if (auth.user) {
      setIsAdmin(auth.user.isAdmin);
    }
  }, [auth.user]);

  const fetchData = () => {
    axios
      .get("https://localhost:7051/api/Appointment")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching appointments!", error)
      );

    axios
      .get("https://localhost:7051/api/User")
      .then((response) => {
        setUsers(response.data);
        /*    const admins = response.data.filter((user) => user.isAdmin); */
      })
      .catch((error) =>
        console.error("There was an error fetching users!", error)
      );

    axios
      .get("https://localhost:7051/api/Category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching categories!", error)
      );

    axios
      .get("https://localhost:7051/api/Product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching products!", error)
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDeleteCategory = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios
        .delete(`https://localhost:7051/api/Category/${categoryId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => fetchData())
        .catch((error) =>
          console.error("There was an error deleting the category!", error)
        );
    }
  };

  const onDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://localhost:7051/api/User/${userId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => fetchData())
        .catch((error) =>
          console.error("There was an error deleting the user!", error)
        );
    }
  };

  const onDeleteAppointment = (appointmentId) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      axios
        .delete(`https://localhost:7051/api/Appointment/${appointmentId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => fetchData())
        .catch((error) =>
          console.error("There was an error deleting the appointment!", error)
        );
    }
  };

  const onDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`https://localhost:7051/api/Product/${productId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => fetchData())
        .catch((error) =>
          console.error("There was an error deleting the product!", error)
        );
    }
  };

  const handleMenuSelect = (operation) => {
    setSelectedOperation(operation);
  };

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductChange = (event) => {
    const productId = event.target.value;
    const selectedProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    setSelectedProduct(selectedProduct);
  };

  return (
    <div>
      {isAdmin ? (
        <div>
          <div className="flex justify-center mt-4 space-x-4 mb-32">
            <div className="relative group">
              <button className="p-2 border border-red-300 rounded">
                Appointment
              </button>
              <div className="absolute left-0 hidden mt-1 space-y-1 border border-red-300 rounded shadow-lg group-hover:block group-focus-within:block z-10">
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => handleMenuSelect("createAppointment")}
                >
                  Create
                </button>
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => handleMenuSelect("deleteAppointment")}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="relative group">
              <button className="p-2 border border-red-300 rounded">
                Category
              </button>
              <div className="absolute left-0 hidden mt-1 space-y-1 border border-red-300 rounded shadow-lg group-hover:block group-focus-within:block z-10">
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => handleMenuSelect("createCategory")}
                >
                  Create
                </button>
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => handleMenuSelect("deleteCategory")}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="relative group">
              <button className="p-2 border border-red-300 rounded">
                Product
              </button>
              <div className="absolute left-0 hidden mt-1 space-y-1 border border-red-300 rounded shadow-lg group-hover:block group-focus-within:block z-10">
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => handleMenuSelect("createProduct")}
                >
                  Create
                </button>
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => handleMenuSelect("deleteProduct")}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          {selectedOperation === "createAppointment" && (
            <div className="max-w-md mx-auto w-96 h-96">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmitAppointment(onSubmitAppointment)}
              >
                <div className="text-black font-bold text-center">
                  Add Appointment
                </div>
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="appointment-name"
                  >
                    Appointment
                  </label>
                </div>
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    {...registerAppointment("categoryId", { required: true })}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="user"
                  >
                    UserId
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="user"
                    {...registerAppointment("userId", { required: true })}
                  >
                    <option value="">Select a UserId</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.id}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="product"
                  >
                    Product
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="product"
                    {...registerAppointment("productId", { required: true })}
                    onChange={handleProductChange}
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Date"
                  >
                    Date
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Date"
                    type="datetime-local"
                    {...registerAppointment("Date", { required: true })}
                  />
                </div>

                <div className="flex items-center justify-between form-control">
                  <button
                    className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Appointment
                  </button>
                </div>
                {isError && (
                  <p className="mt-5 text-red-500 text-xs italic">
                    There was an error adding the appointment! Please try again.
                  </p>
                )}
              </form>
            </div>
          )}
          {selectedOperation === "deleteAppointment" && (
            <div className="relative overflow-scroll rounded mt-10 max-w-md mx-auto w-96 h-96 mb-20">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      All Appointment
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {appointment.userId}
                      </th>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => onDeleteAppointment(appointment.id)}
                          className="inline-block bg-red-700 rounded hover:border-gray-200 text-white hover:bg-red-900 py-1 px-3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {selectedOperation === "createCategory" && (
            <div className="max-w-md mx-auto w-96 h-96">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmitCategory(onSubmitCategory)}
              >
                <div className="text-black font-bold text-center">
                  Add Category
                </div>
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category-name"
                  >
                    Category name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category-name"
                    type="text"
                    placeholder="Category name"
                    {...registerCategory("name", { required: true })}
                  />
                </div>

                <div className="flex items-center justify-between form-control">
                  <button
                    className="bg-red-300 hover:bg-z-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Category
                  </button>
                </div>
                {isError && (
                  <p className="mt-5 text-red-500 text-xs italic">
                    There was an error adding Category! Please try again.
                  </p>
                )}
              </form>
            </div>
          )}{" "}
          {selectedOperation === "deleteCategory" && (
            <div className="flex flex-col items-center sm:flex-row">
              <div className="relative overflow-scroll rounded mt-10 max-w-md mx-auto w-96 h-96 mb-20">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        All Categories
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr
                        key={category.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {category.name}
                        </th>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => onDeleteCategory(category.id)}
                            className="inline-block bg-red-700 rounded hover:border-gray-200 text-white hover:bg-red-900 py-1 px-3"
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
          )}
          {selectedOperation === "createProduct" && (
            <div className="max-w-md mx-auto w-96 h-96">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmitProduct(onSubmitProduct)}
              >
                <div className="text-black font-bold text-center">
                  Add Product
                </div>{" "}
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    {...registerProduct("categoryId", { required: true })}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 form-control">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="product-name"
                  >
                    Product Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="product-name"
                    type="text"
                    placeholder="Product name"
                    {...registerProduct("name", { required: true })}
                  />
                </div>
                <div className="flex items-center justify-between form-control">
                  <button
                    className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Product
                  </button>
                </div>
                {isError && (
                  <p className="mt-5 text-red-500 text-xs italic">
                    There was an error adding product! Please try again.
                  </p>
                )}
              </form>
            </div>
          )}
          {selectedOperation === "deleteProduct" && (
            <div className="flex flex-col items-center sm:flex-row">
              <div className="relative overflow-scroll rounded mt-10 max-w-md mx-auto w-96 h-96 mb-20">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        All Products
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {product.name}
                        </th>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => onDeleteProduct(product.id)}
                            className="inline-block bg-red-700 rounded hover:border-gray-200 text-white hover:bg-red-900 py-1 px-3"
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
          )}
        </div>
      ) : (
        <div>You do not have access to this page.</div>
      )}
    </div>
  );
};
