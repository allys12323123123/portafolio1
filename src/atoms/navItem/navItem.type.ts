export type NavItemProps = {
  isHref?: Boolean
  path: string
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
  text: string
}
