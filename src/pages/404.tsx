import React from "react"
import Link from "next/link"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"

//import { useThemeContext } from "../utilities/themeContext"
import Rocket from "../components/rocket/rocket"

const NotFoundPage = (): JSX.Element => {
	//const theme = useThemeContext()

	return (
		<>
			<SEO title={"Not found"} />
			<Layout noMenu={true}>
				<>
					<h1>Page not found</h1>

					<Rocket />
					<br />
					{process.env.NODE_ENV === "development" ? (
						<>
							<br />
              Try creating a page in <code>src/pages/</code>.
							<br />
						</>
					) : null}
					<br />
					<div id="link">
						<Link href="/">Go home</Link>.
					</div>
				</>
			</Layout>
		</>
	)
}

export default NotFoundPage
