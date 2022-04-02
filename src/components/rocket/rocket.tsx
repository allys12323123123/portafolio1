import React from "react"
//import { useThemeContext } from '../../utilities/themeContext'
import WindSvg from "../../../public/assets/wind.svg"
import RocketSvg from "../../../public/assets/rocket.svg"
import * as styles from "./rocket.module.scss"
import Image from "next/image"

const Rocket = (): JSX.Element => {
	//const theme: string = useThemeContext();

	return (
		<div className={styles.wrap}>
			<div className={styles.rocketWrap}>
				<div className={styles.rocket}>
					<Image src={RocketSvg} width={200} height={400} loader={({src}) => src + "?w=200"} />
				</div>
			</div>
			<div className={styles.wind}>
				<Image src={WindSvg} width={400} height={200} loader={({src}) => src + "?w=400"} />
			</div>
		</div>
	)
}

export default Rocket
