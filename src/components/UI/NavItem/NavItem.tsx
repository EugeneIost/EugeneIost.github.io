import { ReactNode } from "react";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ children, href, onClick }: NavItemProps) => {
  return (
    <li onClick={() => onClick && onClick()} className={styles["nav-item"]}>
      <a className={styles["nav-item__link"]} href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
