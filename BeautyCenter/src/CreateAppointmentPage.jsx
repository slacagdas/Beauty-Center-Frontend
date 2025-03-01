import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateAppointmentPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mesaj durumu
  const userId = localStorage.getItem("Id");

  useEffect(() => {
    axios
      .get("https://localhost:7051/api/Category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });

    axios
      .get("https://localhost:7051/api/Product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.categoryId === parseInt(selectedCategory)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [selectedCategory, products]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId || !appointmentDate || !selectedCategory || !selectedProduct) {
      console.error("Please fill in all fields");
      return;
    }

    const selectedProductObject = products.find(
      (product) => product.id === parseInt(selectedProduct)
    );

    const selectedProductName = selectedProductObject
      ? selectedProductObject.name
      : "";

    const appointment = {
      UserId: parseInt(userId),
      date: appointmentDate,
      CategoryId: parseInt(selectedCategory),
      ProductId: parseInt(selectedProduct),
      ProductName: selectedProductName,
    };

    axios
      .post("https://localhost:7051/api/Appointment", appointment)
      .then((response) => {
        console.log("Appointment created successfully!");
        setSuccessMessage("Randevunuz başarıyla oluşturuldu!");
        // Mesajı 3 saniye sonra kaldır
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((error) => {
        console.error("There was an error creating the appointment!", error);
        if (error.response && error.response.data) {
          console.error("Error details:", error.response.data);
        }
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Appointment</h2>

      {/* Başarı mesajını göster */}
      {successMessage && (
        <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-md">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Kategori
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Kategori Seçiniz
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            İşlem
          </label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              İşlem Seçiniz
            </option>
            {filteredProducts.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tarih
          </label>
          <input
            type="datetime-local"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-red-400 text-white rounded-md"
        >
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default CreateAppointmentPage;
