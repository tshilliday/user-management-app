import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1 className="title">404</h1>
      <h2 className="subtitle">Page Not Found</h2>
      <p className="description">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="link">
        Go back home
      </Link>
    </div>
  );
}
