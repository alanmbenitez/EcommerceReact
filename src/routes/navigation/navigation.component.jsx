import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { ReactComponent as CrownName } from '../../assets/name_crown.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import {LogoContainer, NavigationContainer, NavLink, NavLinks, NavLinkSpan} from './navigation.styles'
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
   /*  const { currentUser } = useContext(UserContext) */
    const { isCartOpen } = useContext(CartContext)
   const currentUser = useSelector(selectCurrentUser)


 
   

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className="logo" />
                    <CrownName className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/'>
                        HOME
                    </NavLink>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                             SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen &&  <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;