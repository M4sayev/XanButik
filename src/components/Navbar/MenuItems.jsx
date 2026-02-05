import { Link } from "react-router-dom";

const items = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/About" },
  { label: "Contact Us", path: "/ContactUs" },
  { label: "Store", path: "/Store" },
];

function MenuItems({ isHamActive, setIsHamActive, currentPage }) {
  const handleMenuItemClick = () => {
    if (isHamActive) setIsHamActive(false);
  };

  return items.map(({ label, path }) => (
    <li key={label} role="none">
      <Link
        to={path}
        role="menuitem"
        className={`link ${currentPage === label ? "active" : ""}`}
        onClick={handleMenuItemClick}
      >
        {label}
      </Link>
    </li>
  ));
}

export default MenuItems;
