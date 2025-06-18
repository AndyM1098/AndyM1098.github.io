import { Link } from "react-router-dom";

interface NavbarLinksProps {
  to: string;
  label: string;
}

function NavbarLinks({ to, label }: NavbarLinksProps) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={to}>
          {label}
        </Link>
      </li>
    </>
    
  );
}

export default NavbarLinks;
