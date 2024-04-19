import { LeftNavBar } from './LeftNavBar'
import { RightNavBar } from './RigthNavBat'

export function NavBar() {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text0-sm font-light'>
            <LeftNavBar activeStyle={activeStyle}/>
            <RightNavBar activeStyle={activeStyle}/>
        </nav>
    )
}