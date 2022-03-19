import Image from 'next/image'
import React from 'react'

import * as styles from './ball.module.scss'
import { BallProps } from './ball.types'

const Ball = ({ BallSvg, fastAnimation = false }: BallProps): JSX.Element => {

    return (
        <div className={fastAnimation ? styles.ballFast : styles.ball}>
            <Image src={BallSvg} layout='fill' />
        </div>
    )
}

export default Ball
