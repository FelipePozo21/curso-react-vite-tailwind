import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCardContext } from "../../Context/Context"
import { CgShoppingCart } from 'react-icons/cg'

export function RightNavBar({activeStyle}) {
    const {
         count,
         toggleIsProductDetailOpen
     } = useContext(ShoppingCardContext)
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
            <li 
            className="flex justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
                toggleIsProductDetailOpen()
            }}
            >
                <CgShoppingCart /> {count}</li>
        </ul>
    )
}