import { ReactNode } from "react";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  children: ReactNode;
  href: string;
}

const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <li className={styles["nav-item"]}>
      <a className={styles["nav-item__link"]} href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
