import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logoLink}>
            <Image
                src="/Logo.svg"
                alt="SIMPLE"
                className={styles.logo}
                width={348}
                height={133}
                priority
            />
            </a>
            <nav>
                <ul className={styles.Items}>
                    <li>
                        <a href="/members">メンバー</a>
                    </li>
                    </ul>
                </nav>
        </header>
    );
}