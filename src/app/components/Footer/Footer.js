import styles from "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}
