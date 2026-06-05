import { useEffect, useState } from "react";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    product_name: "",
    sku: "",
    price: "",
    quantity_in_stock: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    api.get("/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/products/", {
        product_name: formData.product_name,
        sku: formData.sku,
        price: Number(formData.price),
        quantity_in_stock: Number(formData.quantity_in_stock),
      });

      alert("Product Created Successfully");

      setFormData({
        product_name: "",
        sku: "",
        price: "",
        quantity_in_stock: "",
      });

      fetchProducts();

    } catch (error) {
      console.error(error);
      alert("Error creating product");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      alert("Product Deleted Successfully");

      fetchProducts();

    } catch (error) {
      console.error(error);
      alert("Error deleting product");
    }
  };

  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={handleSubmit}>
        <h3>Add Product</h3>

        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={formData.product_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity_in_stock"
          placeholder="Stock"
          value={formData.quantity_in_stock}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Product
        </button>
      </form>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.quantity_in_stock}</td>
              <td>
                <button
                  onClick={() => handleDelete(product.id)}
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

export default Products;