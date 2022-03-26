import React from "react"
import PhotoProfile from "../../atoms/photoProfile/photoProfile"

import * as styles from "./profile.module.scss"
import {useThemeContext} from "../../utilities/themeContext"
//import Link from "next/link"

const Profile = (): JSX.Element => {
	const theme: string = useThemeContext()

	return (
		<div className={styles.profile}>
			<PhotoProfile />
			<span className={`${styles.cvButton} ${theme === "dark" ? null : styles.light}`}>
				<a
					rel="noopener noreferrer"
					href={"/documents/cv.pdf"}
					target="_blank"
					title="Download my CV"
					download="CV_Michele_Pulvirenti.pdf"
				>
          Download CV
				</a>
			</span>
			{/*
            <span className={`${styles.cvButton} ${theme === "dark" ? null : styles.light}`}>
                <Link href={"/curriculum"} >View CV</Link>
            </span>
    */}
		</div>
	)
}

export default Profile
