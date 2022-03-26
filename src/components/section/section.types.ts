import {ReactElement} from 'react'

export type SectionProps = {
  title: string
  children: ReactElement
  reversed?: boolean
  id?: string
  Svg?: {
    svg: StaticImageData | string
    fill?: string
    stroke?: string
  }
  paragraph?: boolean
}
