import React, { useEffect, useState } from "react";
import API from "../api";
import { useUser, useAuth } from "@clerk/clerk-react";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "Tea",
    image: null,
  });

  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  const isAdmin = isSignedIn;

  const categories = [
    "all",
    "Tea",
    "Healthy Tea",
    "Coolers",
    "Juices",
    "Snacks",
  ];

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/menu");
      if (Array.isArray(res.data)) setItems(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleDelete = async (id) => {
    const token = await getToken();
    if (!token) return alert("Unauthorized");

    if (window.confirm("Are you sure you want to delete this item?")) {
      setLoading(true);
      try {
        await API.delete(`/api/menu/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchMenu();
      } catch (err) {
        alert("Failed to delete item");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleImageUpload = (e) =>
    setForm({ ...form, image: e.target.files[0] });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      name: item.name,
      description: item.description,
      price: item.price,
      image: null,
      category: item.category || "Tea",
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    if (!token) return alert("Unauthorized");

    setLoading(true);
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

    try {
      if (editId) {
        await API.put(`/api/menu/${editId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Item updated successfully!");
      } else {
        await API.post("/api/menu", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Item added successfully!");
      }
      setEditId(null);
      setForm({
        name: "",
        description: "",
        price: "",
        category: "Tea",
        image: null,
      });
      setShowForm(false);
      fetchMenu();
    } catch (err) {
      alert("Operation failed. Check inputs or permissions.");
    } finally {
      setLoading(false);
    }
  };

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-600/30 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            🍃 Premium Tea Collection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Tea <span className="text-amber-300">Menu</span>
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium teas, each
            crafted with passion and served with excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Admin Controls */}
        {isAdmin && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⚙️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Admin Panel
                      </h3>
                      <p className="text-emerald-100 text-sm">
                        Manage menu items
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
                  >
                    {showForm ? "Hide Form" : "Add New Item"}
                  </button>
                </div>
              </div>

              {showForm && (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Item Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g., Masala Chai"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Category
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="Tea">Tea</option>
                        <option value="Healthy Tea">Healthy Tea</option>
                        <option value="Coolers">Coolers</option>
                        <option value="Juices">Juices</option>
                        <option value="Snacks">Snacks</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Price (₹)
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="40"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="A delicious blend of aromatic spices..."
                      required
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading
                        ? "Processing..."
                        : editId
                        ? "Update Item"
                        : "Add Item"}
                    </button>
                    {editId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditId(null);
                          setForm({
                            name: "",
                            description: "",
                            price: "",
                            category: "Tea",
                            image: null,
                          });
                          setShowForm(false);
                        }}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Menu Items by Category */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            <span className="ml-4 text-gray-600">Loading menu...</span>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedItems).map(([category, categoryItems]) => (
              <div key={category} className="category-section">
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full flex-1 max-w-20"></div>
                    <h2 className="text-3xl font-bold text-gray-800 px-4">
                      {category}
                    </h2>
                    <div className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex-1 max-w-20"></div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-emerald-600 font-medium">
                      {categoryItems.length} item
                      {categoryItems.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {/* Category Items Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryItems.map((item) => (
                    <div
                      key={item._id}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
                    >
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          ₹{item.price}
                        </div>
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Admin Buttons Below Content */}
                        {isAdmin && (
                          <div className="flex justify-between pt-4 border-t border-gray-100">
                            <button
                              onClick={() => handleEdit(item)}
                              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors duration-300"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium text-sm hover:bg-red-100 transition-colors duration-300"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {Object.keys(groupedItems).length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🫖</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No items found
            </h3>
            <p className="text-gray-500">
              No menu items available. Add some items to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
