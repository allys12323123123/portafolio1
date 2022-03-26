import React, {useEffect} from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import {about} from "../utilities/info"

const IndexPage = (): JSX.Element => {
	const animateKeyDown = (key: KeyboardEvent) => {
		if (key.keyCode === 79)
		//o
			document.body.style.color = "var(--orange)"
		if (key.keyCode === 80)
		//p
			document.body.style.color = "var(--pink)"
		if (key.keyCode === 187) {
			//+
			document.body.style.transform = "scale(1.5)"
			document.body.style.overflowX = "scroll"
		}
		if (key.keyCode === 189)
		//-
			document.body.style.transform = "scale(0.5)"
		if (key.keyCode === 85)
		//u
			document.body.style.textDecoration = "underline"
		if (key.keyCode === 84)
		//t
			document.body.style.webkitTextStroke = "thick"
	}
	const animateKeyUp = (/*key: any*/) => {
		document.body.style.cssText = "none"
	}

	useEffect(() => {
		document.addEventListener("keydown", animateKeyDown)
		document.addEventListener("keyup", animateKeyUp)

		return () => {
			document.removeEventListener("keydown", animateKeyDown)
			document.removeEventListener("keyup", animateKeyUp)
		}
	}, [])

	return (
		<>
			<SEO title={"Michele Pulvirenti"} description={about} />
			<Layout>
				<div>
					<Hero />
				</div>
			</Layout>
		</>
	)
}

export default IndexPage
