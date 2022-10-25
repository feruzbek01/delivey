import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 80px;

  /* ====== media 767 */
  @media (max-width: 767px) {
    width: 100%;
    height: fit-content;
    line-height: 50px;

    .logo {
      display: flex;
      align-items: center;
      gap: 5px;

      img {
        width: calc(100% - 70%) !important ;
      }

      h5 {
        font-size: 0.8rem;
      }
    }
  }

  /*========= media 991====== */
  @media (max-width: 991px) {
    .logo img {
      width: calc(100% - 60%);
    }

    .logo h5 {
      font-size: 1rem;
    }

    .navigation {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.425);
      z-index: 99;

      display: none;
    }

    .show_menu {
      display: block;
    }

    .menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 250px;
      height: 100%;
      background: #fff;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 20px;
      z-index: 100;
    }

    .menu a {
      font-size: 1rem;
    }

    .cart-icon i,
    .link i,
    .mobile_menu i {
      font-size: 1.2rem;
    }

    .mobile_menu {
      display: block !important;
    }
  }

  @media (max-width: 480px) {
    .cart-icon i,
    .link i,
    .mobile_menu i {
      font-size: 1.1rem;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Logo = styled.div`
  text-align: center;
  > :nth-child(1) {
    width: calc(100% - 60%);
    object-fit: contain;
  }

  > :nth-child(2) {
    font-weight: 600px;
    font-size: 1rem;
    color: #212245;
  }
`;

export const Navigation = styled.div``;

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "blue" : "",
  };
};
export const Menu = styled.div`
  display: flex;
  gap: 50px;

  * {
    color: black;
    font-size: 17;
    font-weight: 600;
    transition: 0.3s;
    text-decoration: none;
  }

  *:hover {
    color: blue !important;
    /* transform: scale(1.04) */
  }
`;

export const NavRight = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 320px) {
    gap: 10px;
  }

  > :nth-child(3) {
    display: none;
  }

  i {
    font-size: 1.4rem;
    color: #212245;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
  }
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    top: -3px;
    right: -10px;

    width: 15px;
    height: 15px;
    font-size: 0.8rem;

    background-color: red;
    color: #fff;
    font-weight: 500;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }


  @media (max-width: 767px) {
    span {
      position: absolute;
      top: 3px !important;
      right: -10px;
    }
  }

  @media (max-width: 991px) {
    span {
      position: absolute;
      top: -5px;
      right: -10px;
    }
  }
`;
