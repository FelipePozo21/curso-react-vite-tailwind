import { NavLink } from "react-router-dom"

export function RightNavBar({activeStyle}) {
    return (
        <ul className='flex items-center gap-3'>
            <li className="text-black/60">example@platzi.com</li>
            <li>
                <NavLink 
                to='/my-orders'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/my-account'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/sing-in'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    Sing In
                </NavLink>
            </li>
            <li>🛒 0</li>
        </ul>
    )
}