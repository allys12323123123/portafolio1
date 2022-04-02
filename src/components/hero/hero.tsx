import React from "react"

import * as styles from "./hero.module.scss"

import Section from "../section/section"
import Whoami from "../whoami/whoami"
import Skills from "../skills/skills"

import Account from "../../../public/assets/account.svg"
import Coding from "../../../public/assets/coding.svg"
import HSkills from "../../../public/assets/skills.svg"
import Teaching from "../../../public/assets/teaching.svg"
import Things from "../../../public/assets/things.svg"
import Others from "../others/others"
import {useThemeContext} from "../../utilities/themeContext"
import Timeline from "../../atoms/timeline/timeline"
import {about, events, works} from "../../utilities/info"
import Parallax from "../../atoms/parallax/parallax"

const Hero = (): JSX.Element => {
	const theme: string = useThemeContext()

	const color = theme === "dark" ? "var(--svg-dark)" : "var(--svg-light)"

	return (
		<div className={styles.wrapper}>
			<Whoami />
			<div className={styles.sectionWrap}>
				<div className={styles.parallax}>
					<Parallax />
				</div>
				<Section title={"About me"} id={"about"} Svg={{svg: Account, stroke: color}}>
					<div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
				</Section>
				<Section title={"Work Experiences"} id={"works"} Svg={{svg: Coding, fill: color}} reversed>
					<div dangerouslySetInnerHTML={{__html: works}} />
				</Section>
				<Section title={"Hard skills"} id={"skills"} Svg={{svg: HSkills, fill: color}}>
					<Skills />
				</Section>
				<Section title={"Education"} id={"education"} Svg={{svg: Teaching, fill: color}} reversed>
					<Timeline events={events} />
				</Section>
				<Section title={"Other experiences"} id={"others"} Svg={{svg: Things, fill: color}}>
					<Others />
				</Section>
			</div>
		</div>
	)
}

export default Hero
