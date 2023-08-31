import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from '../../Context'
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4 "

    const handleSignOut = () => {

        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.stringify(account)
    
    // Has an account

    const noAccountInLocalStorage = parsedAccount? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  
    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut){
            return (
                <>
                <li className="text-black/60">
                    {context.account.email}
                </li>
                <li>
                    <NavLink
                    className= {({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to="/myorders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className= {({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to="/myaccount">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className= {({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}
                    to="/signin">
                        Sign Out
                    </NavLink>
                </li>
                </>
                
            )
        } else {
            return (
            <li>
                <NavLink
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                onClick={() => handleSignOut()}
                to="/signin">
                    Sign in
                </NavLink>
            </li>
            )
        }
    }


    return (
        <nav className="flex bg-white h-20 justify-between m z-10 w-full px-10 fixed top-0">
            <ul className="flex gap-5 items-center">
                <li>
                    <NavLink
                    className="font-bold text-xl"
                    to={`${isUserSignOut? '/signin': '/'}`}>
                        Bellota's Store
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchCategory()}
                    className= {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    to="/">
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchCategory('smartphones')}
                    className= {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    to="/electronics">
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchCategory('home-decoration')}
                    className= {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    to="/homedecoration">
                        Home Decoration
                    </NavLink>
                </li>
                
            </ul>

            <ul className="flex gap-5 items-center">
                {renderView()}
                <li className="flex gap-1">
                <ShoppingCartIcon className="w-6 h-6 " />
                {context.count}
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar