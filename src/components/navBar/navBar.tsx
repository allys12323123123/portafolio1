import React, { useState, useEffect } from 'react'

import * as styles from './navBar.module.scss'
import { NavBarProps } from './navBar.types'

import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'


const NavBar = ({isBlocking = false}: NavBarProps): JSX.Element => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (document.getElementById("navBar")) {
                if (currentScrollPos === 0) {
                    document.getElementById("navBar")!.style.top = "0";
                } else if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navBar")!.style.top = "0";
                } else if (!navBarOpen) {
                    document.getElementById("navBar")!.style.top = "-75px";
                }
            }

            prevScrollpos = currentScrollPos;
        }
    });

    const closeNavBar = () => {
        setNavBarOpen(false);
        document.body.style.overflowY = "scroll";
        document.body.style.height = "auto";
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
        document.getElementsByTagName("html")[0].style.height = "auto";
    }

    const openNavBar = () => {
        setNavBarOpen(true);
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }

    return (
        <div className={styles.navBar} id="navBar">
            <div className={styles.logo}>
                <Logo/>
            </div>

            {isBlocking ?
                null
                :
                <div className={styles.navigationDesktop}>
                    <Navigation />
                </div>
            }

            {
                navBarOpen && !isBlocking ?
                    <div className={styles.navigationMobile}>
                        <Navigation onClick={closeNavBar} />
                    </div>
                    :
                    null
            }

            {
                isBlocking ?
                    null
                    :
                    <div className={styles.hamburger}>
                        <Hamburger onClick={navBarOpen ? closeNavBar : openNavBar} navBarOpen={navBarOpen} />
                    </div>
            }
        </div>
    )
}

export default NavBar

