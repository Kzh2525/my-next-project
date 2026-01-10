import Image from "next/image";
import link from "next/link";
import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <link href="/" className={styles.logoLink}>
            <Image
                src="/Logo.svg"
                alt="SIMPLE"
                className={styles.logo}
                width={348}
                height={133}
                priority
            />
            </link>
            <nav>
                <ul className={styles.Items}>
                    <li>
                        <link href="/members">メンバー</link>
                    </li>
                    </ul>
                </nav>
        </header>
    );
}