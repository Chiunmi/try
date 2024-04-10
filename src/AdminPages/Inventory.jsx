import React from "react";
import { Link } from "react-router-dom";
import ProfileLayout from "../Layout/ProfileLayout";
import "./Inventory.css";

const Inventory = () => {
  // Define your inventory data here (e.g., an array of objects)
  const inventoryData = [
    {
      id: 1,
      productNo: "P001",
      productName: "Product A",
      costPerUnit: 10,
      pricePerUnit: 20,
      initialQty: 50,
      currentQty: 40,
      status: "In Stock",
      totalInventoryCost: 500,
    },
    {
      id: 2,
      productNo: "P002",
      productName: "Product B",
      costPerUnit: 15,
      pricePerUnit: 25,
      initialQty: 30,
      currentQty: 25,
      status: "Out of Stock",
      totalInventoryCost: 450,
    },
  ];

  return (
    <ProfileLayout>
      <div className="admin-inventory">
        <div className="back">
          <Link to="/admin_profile">
            <button className="back-button">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-big-left-line"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z" />
                <path d="M21 15v-6" />
              </svg>
            </button>
          </Link>
        </div>
        <div className="inventory-status">
          <div className="chart">
            <h2>Inventory Status</h2>
            (insert chart here)
          </div>
        </div>
        <div className="inventory-table">
          <div className="inventory-management">
            <h2>Inventory Management</h2>
            <table>
              <thead>
                <tr>
                  <th>Product No.</th>
                  <th>Product Name</th>
                  <th>Cost Per Unit</th>
                  <th>Price Per Unit</th>
                  <th>Initial Qty.</th>
                  <th>Current Qty. in Stock</th>
                  <th>Status</th>
                  <th>Total Inventory Cost</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.productNo}</td>
                    <td>{item.productName}</td>
                    <td>${item.costPerUnit}</td>
                    <td>${item.pricePerUnit}</td>
                    <td>{item.initialQty}</td>
                    <td>{item.currentQty}</td>
                    <td>{item.status}</td>
                    <td>${item.totalInventoryCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Inventory;
