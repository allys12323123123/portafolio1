import React from 'react'

import * as styles from './footer.module.scss'

//import Phone from '../../../public/assets/phone.svg'
import Email from '../../../public/assets/email.svg'
import Linkedin from '../../../public/assets/linkedin.svg'
import Github from '../../../public/assets/github.svg'
//import { useThemeContext } from '../../utilities/themeContext'
import {email, github, linkedin} from '../../utilities/info'
import Link from 'next/link'
import Image from 'next/image'

const width = '50px'
const height = '50px'

const Footer = (): JSX.Element => {
  //const theme: string = useThemeContext();

  //const color: string = theme === "dark" ? "var(--icon-dark)" : "var(--icon-light)"

  return (
    <>
      <div className={styles.footer} id={'contacts'}>
        <h2 className={styles.contacts}>My contacts</h2>
        <div className={styles.icons}>
          {/*<Phone width={width} fill={color} />*/}
          <a
            className={styles.icon}
            href={'mailto:' + email}
            title={'Send me an email'}
            target={'_blank'}
            rel="noreferrer"
          >
            <Image src={Email} width={width} height={height} />
          </a>
          <a className={styles.icon} href={linkedin} title={'Linkedin profile'} target={'_blank'} rel="noreferrer">
            <Image src={Linkedin} width={width} height={height} />
          </a>
          <a className={styles.icon} href={github} title={'GitHub profile'} target={'_blank'} rel="noreferrer">
            <Image src={Github} width={width} height={height} />
          </a>
        </div>
      </div>
      <span id={'link'}>
        <Link href={'/game'}>Wanna play a game?</Link>
      </span>
    </>
  )
}

export default Footer
