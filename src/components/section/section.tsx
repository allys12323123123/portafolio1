import React, {useState} from "react"
import {SectionProps} from "./section.types"

import * as styles from "./section.module.scss"
import sleep from "../../utilities/sleep"
import {useThemeContext} from "../../utilities/themeContext"
import Image from "next/image"

const Section = ({title, children, id, reversed = false, Svg, paragraph = false}: SectionProps): JSX.Element => {
	const theme: string = useThemeContext()

	const [isClicked, setIsClicked] = useState<boolean>(false)
	const [isMouseOn, setIsMouseOn] = useState<boolean>(false)

	const setClicked = async () => {
		if (!isClicked) {
			setIsClicked(true)
			await sleep(2000)
			setIsClicked(false)
		}
	}

	const setMouseOn = async () => {
		if (!isMouseOn) {
			setIsMouseOn(true)
			await sleep(2000)
			setIsMouseOn(false)
		}
	}

	return (
		<div
			className={`${reversed ? styles.sectionReversed : styles.section} ${theme === "dark" ? "" : styles.light}`}
			style={{backgroundColor: theme === "dark" ? "var(--sect-bg-dark)" : "var(--sect-bg-light)"}}
			id={id ? id : title}
		>
			{paragraph ? (
				<>
					<h2 className={`${styles.titleParagraph} ${theme === "dark" ? "" : styles.titleLight}`}>{title}</h2>
					<div className={styles.contentParagraph}>
						{Svg ? (
							<div className={styles.svg} onClick={setClicked} onMouseEnter={setMouseOn} onMouseDown={setClicked}>
								<div
									className={isMouseOn ? styles.trebbling : null || isClicked ? styles.move : null}
									//fill={Svg.fill ? Svg.fill : "none"}
									//stroke={Svg.stroke ? Svg.stroke : "none"}
								>
									<Image
										src={Svg.svg}
										width={100}
										height={100}
										alt={title}
										loader={({src}) => src + "?w=100"}
										objectFit="cover"
									/>
								</div>
							</div>
						) : null}
						<div className={styles.childrenParagraph}>{children}</div>
					</div>
				</>
			) : (
				<>
					<h2 className={`${reversed ? styles.titleReversed : styles.title} ${theme === "dark" ? "" : styles.titleLight}`}>
						{title}
					</h2>
					<div className={reversed ? styles.contentReversed : styles.content}>
						{Svg ? (
							<div className={styles.svg} onClick={setClicked} onMouseEnter={setMouseOn} onMouseDown={setClicked}>
								<div
									//fill={Svg.fill ? Svg.fill : "none"}
									className={isMouseOn ? styles.trebbling : "" || isClicked ? styles.move : ""}
									//</div>stroke={Svg.stroke ? Svg.stroke : "none"}
								>
									<Image
										src={Svg.svg}
										width={100}
										height={100}
										alt={title}
										loader={({src}) => src + "?w=100"}
										objectFit="cover"
									/>
								</div>
							</div>
						) : null}
						<div className={styles.children}>{children}</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Section
