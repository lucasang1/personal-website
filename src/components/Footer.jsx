import { useEffect, useState } from "react";

export default function Footer() {
    const [year] = useState(new Date().getFullYear())
    return (
        <footer>
            © {year} Lucas Ang
        </footer>
    );
}