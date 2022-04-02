import React, {useEffect, useState, useRef} from "react"
import sleep from "../../utilities/sleep"
import * as styles from "./bashWindow.module.scss"
import {BashWindowProps, Dim} from "./bashWindow.types"

const BashWindow = ({children}: BashWindowProps): JSX.Element => {
	const [dim, setDim] = useState<Dim>({width: 70, height: 32})
	const terminalRef = useRef<null>(null)
	const [compact, setCompact] = useState<boolean>(false)
	const [terminal, setTerminal] = useState<HTMLElement>()

	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0
	let startX: number, startY: number, startW: number, startH: number

	const calculateDim = () => {
		if (document.getElementById("terminal")) {
			const rect: DOMRect | undefined = document.getElementById("terminal")?.getBoundingClientRect()
			let w = 0,
				h = 0
			if (rect != undefined) {
				w = rect.width
				h = rect.height
			}
			setDim({width: Math.floor(w), height: Math.floor(h)})
		}
	}

	useEffect(() => {
		calculateDim()
		window.addEventListener("resize", calculateDim)
		if (terminalRef.current) setTerminal(terminalRef.current)
	}, [])

	useEffect(() => {
		terminal?.addEventListener("touchstart", handleTouch, {passive: true})
		return () => {
			terminal?.removeEventListener("touchstart", handleTouch)
		}
	}, [terminal])

	const handleTouch = (event: TouchEvent) => {
		switch (event.touches.length) {
		case 1:
			break
		case 2:
			handleTwoTouches(event)
			break
		}
	}

	const handleTwoTouches = (event: TouchEvent) => {
		event.preventDefault()
		const first = event.touches.item(0)
		const second = event.touches.item(1)
		const t = document.getElementById("terminal")
		if (first && second) {
			(t as HTMLDivElement).style.transition = "none"
			startX = first.clientX > second.clientX ? first.clientX - second.clientX : second.clientX - first.clientX
			startY = first.clientY > second.clientY ? first.clientY - second.clientY : second.clientY - first.clientY
			startW = (t as HTMLDivElement).getBoundingClientRect().width
			startH = (t as HTMLDivElement).getBoundingClientRect().height
			document.ontouchmove = handleTwoTouchesMove
			document.ontouchend = handleTouchEnd
		}
	}

	const handleTouchEnd = () => {
		(document.getElementById("terminal") as HTMLDivElement).style.transition = ""
		document.ontouchmove = null
		document.ontouchend = null
	}

	const handleTwoTouchesMove = (event: TouchEvent) => {
		event.preventDefault()
		const first = event.touches.item(0)
		const second = event.touches.item(1)
		if (first && second) {
			const offXAfter: number =
    first.clientX > second.clientX ? first.clientX - second.clientX : second.clientX - first.clientX
			const offYAfter: number =
    first.clientY > second.clientY ? first.clientY - second.clientY : second.clientY - first.clientY
			console.log(startX, offXAfter)
			if (offXAfter != startX || offYAfter != startY) {
				const elmnt = document.getElementById("terminal") as HTMLDivElement
				elmnt.style.width = `${startW + (offXAfter - startX) / 2}px`
				elmnt.style.height = `${startH + (offYAfter - startY) / 2}px`
			}
			calculateDim()
			event.preventDefault()
		}
	}

	const dragMouseDown = (e: any) => {
		e = e || window.event
		e.preventDefault()
		// get the mouse cursor position at startup:
		pos3 = e.clientX
		pos4 = e.clientY
		document.onmouseup = closeDragElement
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag
	}

	const elementDrag = (e: MouseEvent) => {
		e = e || window.event
		e.preventDefault()
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX
		pos2 = pos4 - e.clientY
		pos3 = e.clientX
		pos4 = e.clientY
		// set the element's new position:
		const elmnt = document.getElementById("terminal") as HTMLDivElement
		elmnt.style.top = elmnt.offsetTop - pos2 + "px"
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
	}

	const closeDragElement = () => {
		// stop moving when mouse button is released:
		document.onmouseup = null
		document.onmousemove = null
	}

	const minimize = () => {
		const t = document.getElementById("terminal") as HTMLDivElement
		const c = document.getElementById("content") as HTMLDivElement
		t.style.height = "0"
		t.style.minHeight = "0"
		t.style.width = "auto"
		c.style.height = "0"
		c.style.width = "auto"
		c.style.padding = "0"
		c.style.opacity = "0"
		setCompact(true)
	}

	const expand = () => {
		const t = document.getElementById("terminal") as HTMLDivElement
		const c = document.getElementById("content") as HTMLDivElement
		t.style.height = ""
		t.style.minHeight = ""
		t.style.width = ""
		c.style.height = ""
		c.style.width = ""
		c.style.padding = ""
		c.style.opacity = ""
		setCompact(false)
		calculateDim()
	}

	const close = () => {
		const t = document.getElementById("terminal") as HTMLDivElement
		t.style.transform = "scale(0)"
		t.style.opacity = "0"
		sleep(2000).then(() => {
			t.style.transform = ""
			t.style.opacity = ""
			sleep(1000).then(() => calculateDim())
		})
	}

	return (
		<div className={styles.terminalWrap}>
			<div id={"terminal"} className={styles.terminal} ref={terminalRef}>
				<div className={styles.top} onMouseDown={dragMouseDown}>
					<div className={styles.title}>bash{compact ? "" : `: ~ ${dim.height}x${dim.width}`}</div>
					<div className={styles.buttons}>
						<span className={styles.circleRed} onClick={close}></span>
						<span className={styles.circleYellow} onClick={expand}></span>
						<span className={styles.circleGreen} onClick={minimize}></span>
					</div>
				</div>
				<pre id={"content"} className={styles.content}>
					{children}
				</pre>
			</div>
		</div>
	)
}

export default BashWindow
