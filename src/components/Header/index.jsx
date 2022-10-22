import React, { useEffect, useRef } from "react";
import {
  activeStyle,
  CartIcon,
  ContainerHeader,
  Logo,
  Menu,
  Navigation,
  NavRight,
  NavWrapper,
  styleHeader,
} from "./style";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/shoppingCart/cartUiSlice";
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
  const headerRef = useRef(null);

  const toggleMenu = () => {
    return menuRef.current.classList.toggle("show_menu");
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });
    // return ()=> window.removeEventListener('scroll')
  }, []);

  const dispatch = useDispatch();
  const toggleOpen = () => {
    dispatch(toggle());
  };
  return (
    <ContainerHeader className="" ref={headerRef}>
      <Container>
        <NavWrapper className="nav-wrapper">
          <Logo className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </Logo>

          {/* ===== Menu ===== */}
          <Navigation className="navigation" ref={menuRef}>
            <Menu className="menu">
              {nav__links.map((item, index) => {
                return (
                  <NavLink
                    style={activeStyle}
                    onClick={toggleMenu}
                    to={item.path}
                    key={index}
                    // className={(navClass) => navClass.isActive ? 'red': ''}
                  >
                    {item.display}
                  </NavLink>
                );
              })}
            </Menu>
          </Navigation>

          {/* nav right icons */}
          <NavRight>
            <CartIcon onClick={toggleOpen} className="cart-icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart-badge">{totalQuantity}</span>
            </CartIcon>
            <span>
              <Link className="link" to={"/login"}>
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </NavRight>
        </NavWrapper>
      </Container>
    </ContainerHeader>
  );
};
