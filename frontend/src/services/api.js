import axios from "axios";

const api = axios.create({
 baseURL: "https://inventory-management-system-nq4c.onrender.com",
});

export default api;