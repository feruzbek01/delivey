import React,{useRef} from "react";
import { Container } from "./style";
import { Routers } from "../../routes/Routers";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Carts } from "../UI/Cart/Carts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Layout = () => {
  const isOpen = useSelector((state) => state.cartOpening.isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <Container>
      <Header />
      {isOpen && <Carts isOpen={isOpen} />}
      <Routers />
      <Footer />
    </Container>
  );
};

export default Layout;
