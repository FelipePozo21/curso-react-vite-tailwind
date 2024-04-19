import { NavLink } from "react-router-dom"

export function LeftNavBar({activeStyle}) {
    return (
        <ul className='flex items-center gap-3 '>
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                    ShopI
                </NavLink>
                </li>
            <li>
                <NavLink 
                to='/'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/clothes'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/electronics'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/furnitures'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/toys'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/others'
                className={({isActive}) => 
                isActive ? activeStyle : undefined
                }
                >
                    Others
                </NavLink>
            </li>
        </ul>
    )
}