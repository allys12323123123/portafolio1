import React from 'react'
import PhotoProfile from '../../atoms/photoProfile/photoProfile'

import * as styles from './profile.module.scss'
//import { useThemeContext } from '../../utilities/themeContext'
import Link from 'next/link'

const Profile = (): JSX.Element => {

    //const theme: string = useThemeContext();

    return (
        <div className={styles.profile}>
            <PhotoProfile />
            <Link href={"/curriculum"} >View CV</Link>
            {/*
            <a
                rel="noopener noreferrer"
                href={CV}
                target="_blank"
                title="Download my CV"
                download="CV_Michele_Pulvirenti"
                className={`${styles.cvButton} ${theme === "dark" ? null : styles.light}`}
            >
                Download CV
            </a>
    */}
        </div>
    )
}

export default Profile
