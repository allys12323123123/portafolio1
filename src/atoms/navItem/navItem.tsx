import React, { useEffect, useState } from "react";

import * as styles from "./navItem.module.scss";
import { NavItemProps } from "./navItem.type";

import Link from "next/link";

const NavItem = ({ isHref, path, onClick, text }: NavItemProps): JSX.Element => {

  const [on, setOn] = useState<boolean>(false);

  const filteredPath: string = path.slice(1)

  const getElementRect = () => {

    if (document.getElementById(filteredPath)) {
      const rect: DOMRect = document.getElementById(filteredPath)!.getBoundingClientRect();
      const windowTop: number = window.scrollY;
      const windowBottom: number = windowTop + window.innerHeight;
      const rectTop: number = rect.top + windowTop;
      const rectBottom: number = rect.bottom + windowTop;

      if (rectTop >= windowTop && rectBottom <= windowBottom || rectTop <= windowTop && rectBottom >= windowBottom || rectTop >= windowTop && rectTop + 250 <= windowBottom && rectBottom >= windowBottom) {
        setOn(true)
      }
      else setOn(false)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', getElementRect);
  }, [])

  return (
    <>
      {isHref ? (
        <div onMouseDown={onClick}>
          <a
            href={path}
            className={on ? styles.itemOn : styles.item}
            title={"Go to " + text + " section"}
          >
            {text}
          </a>
        </div>
      ) : (
        <div className={styles.link} onMouseDown={onClick}>
          <Link
            href={path}
          //title={"Go to " + text + " page"}
          >
            <p className={styles.item}>{text}</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavItem;
