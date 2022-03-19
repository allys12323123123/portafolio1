type StaticImageData = {
  src: string
  height: number
  width: number
  placeholder?: string
}

declare module '*.png' {
  const content: StaticImageData
  export default content
}
declare module '*.svg' {
  const component: StaticImageData | string //React.FC<React.SVGProps<SVGSVGElement>>
  export default component
}

declare module '*.module.scss'
declare module '*.pdf'
declare module '*.json'
