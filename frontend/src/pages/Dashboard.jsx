import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/dashboard/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>{data.total_products}</p>
        </div>

        <div className="card">
          <h3>Total Customers</h3>
          <p>{data.total_customers}</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>{data.total_orders}</p>
        </div>

        <div className="card">
          <h3>Low Stock Products</h3>
          <p>{data.low_stock_products}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;