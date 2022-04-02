type StaticImageData = {
 src: string
 height: number
 width: number
 placeholder?: string
}

declare module "*.png" {
 const content: StaticImageData
 export default content
}
declare module "*.svg" {
 const content: any
 export const ReactComponent: any
 export default content
}

declare module "*.module.scss"
declare module "*.pdf"
declare module "*.json"
