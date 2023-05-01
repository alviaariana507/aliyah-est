import { FC } from 'react'
import Menu from './Menu'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="fixed h-screen w-40 bg-white/75 pt-20">
      <Menu />
    </div>
  )
}

export default Sidebar
