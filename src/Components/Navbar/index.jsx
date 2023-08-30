import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from '../../Context'
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const isActyve = "underline underline-offset-4 "
    return (
        <nav className="flex bg-white h-20 justify-between m z-10 w-full px-10 fixed top-0">
            <ul className="flex gap-5 items-center">
                <li>
                    <NavLink
                    className="font-bold text-xl"
                    to="/">
                        Bellota's Store
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchCategory()}
                    className= {({ isActive }) =>
                        isActive ? isActyve : undefined
                }
                    to="/">
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchCategory('smartphones')}
                    className= {({ isActive }) =>
                        isActive ? isActyve : undefined
                }
                    to="/electronics">
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchCategory('home-decoration')}
                    className= {({ isActive }) =>
                        isActive ? isActyve : undefined
                }
                    to="/homedecoration">
                        Home Decoration
                    </NavLink>
                </li>
                
            </ul>

            <ul className="flex gap-5 items-center">
                <li className="text-black/60">
                    gvillanuevavega@gmail.com
                </li>
                <li>
                    <NavLink
                    className= {({ isActive }) =>
                    isActive ? isActyve : undefined
            }
                    to="/myorders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className= {({ isActive }) =>
                    isActive ? isActyve : undefined
            }
                    to="/myaccount">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className= {({ isActive }) =>
                    isActive ? isActyve : undefined
            }
                    to="/signin">
                        Sign in
                    </NavLink>
                </li>

                <li className="flex gap-1">
                <ShoppingCartIcon className="w-6 h-6 " />
                {context.count}
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar