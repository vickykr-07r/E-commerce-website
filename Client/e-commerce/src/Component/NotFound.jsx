import { Link } from "react-router-dom";
import Style from "../Component/NotFound.module.css";

export function NotFound() {
  return (
    <div className={Style.container}>
      <img
        src="https://png.pngtree.com/png-vector/20220505/ourmid/pngtree-not-found-not-found-rectangular-miscellaneous-vector-png-image_13370440.png"
        alt="Not Found"
      />

      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className={Style.btn}>
        Go Back Home
      </Link>
    </div>
  );
}