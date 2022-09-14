import React, {useRef} from "react";
import { activeStyle, CartIcon, ContainerHeader, Logo, Menu, Navigation, NavRight, NavWrapper } from "./style";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

export const Header = () => {

  const menuRef = useRef(null);
  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return (
    <ContainerHeader>
      <Container>
        <NavWrapper className="nav-wrapper">
          <Logo className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </Logo>

          {/* ===== Menu ===== */}
          <Navigation className="navigation" ref={menuRef}>
            <Menu className="menu" >
              {nav__links.map((item, index) => {
                return (
                  <NavLink
                    onClick={toggleMenu}
                    to={item.path}
                    key={index}
                    style={activeStyle}
                    // className={(navClass) => navClass.isActive ? 'isactive': ''}
                  >
                    {item.display}
                  </NavLink>
                );
              })}
            </Menu>
          </Navigation>

          {/* nav right icons */}
          <NavRight>
            <CartIcon className="cart-icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart-badge">2</span>
            </CartIcon>
            <span>
              <Link className="link" to={"/login"}>
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile_menu" onClick={toggleMenu} >
              <i class="ri-menu-line"></i>
            </span>
          </NavRight>
        </NavWrapper>
      </Container>
    </ContainerHeader>
  );
};
