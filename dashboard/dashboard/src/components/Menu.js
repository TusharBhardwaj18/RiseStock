import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <div className="d-flex align-items-center gap-4 small">
      {/* Navigation Links */}
      <ul className="navbar-nav d-flex flex-row gap-3 list-unstyled mb-0">
        {menuItems.map((item, index) => (
          <li key={item.name} className="nav-item">
            <Link
              to={item.path}
              onClick={() => setSelectedMenu(index)}
              className={`nav-link px-1 py-0 ${
                selectedMenu === index
                  ? "text-danger fw-medium"
                  : "text-secondary"
              }`}
              style={{ textDecoration: "none"}}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* User Avatar Badge */}
      <div
        className="rounded-circle d-flex align-items-center justify-content-center text-secondary fw-semibold bg-light border"
        style={{
          width: "28px",
          height: "28px",
          fontSize: "10px",
          cursor: "pointer",
        }}
      >
        ZU
      </div>
    </div>
  );
};

export default Menu;