import { useEffect, useState } from "react";
import api from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    customer_id: "",
    product_id: "",
    quantity: "",
  });

  useEffect(() => {
    fetchOrders();

    api.get("/customers/")
      .then((res) => setCustomers(res.data));

    api.get("/products/")
      .then((res) => setProducts(res.data));
  }, []);

  const fetchOrders = () => {
    api.get("/orders/")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/orders/", {
        customer_id: Number(formData.customer_id),
        items: [
          {
            product_id: Number(formData.product_id),
            quantity: Number(formData.quantity),
          },
        ],
      });

      alert("Order Created Successfully");

      setFormData({
        customer_id: "",
        product_id: "",
        quantity: "",
      });

      fetchOrders();

    } catch (error) {
      console.error(error);
      alert("Failed to create order");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/orders/${id}`);

      alert("Order Deleted Successfully");

      fetchOrders();

    } catch (error) {
      console.error(error);
      alert("Error deleting order");
    }
  };

  return (
    <div>
      <h1>Orders</h1>

      <form onSubmit={handleSubmit}>
        <h3>Create Order</h3>

        <select
          value={formData.customer_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer_id: e.target.value,
            })
          }
          required
        >
          <option value="">Select Customer</option>

          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.full_name}
            </option>
          ))}
        </select>

        <select
          value={formData.product_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              product_id: e.target.value,
            })
          }
          required
        >
          <option value="">Select Product</option>

          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.product_name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({
              ...formData,
              quantity: e.target.value,
            })
          }
          required
        />

        <button type="submit">
          Create Order
        </button>
      </form>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_id}</td>
              <td>{order.total_amount}</td>
              <td>
                <button
                  onClick={() => handleDelete(order.id)}
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

export default Orders;