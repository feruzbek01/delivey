import React from "react";
import { Container } from "./style";
import { Routers } from "../../routes/Routers";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Carts } from "../UI/Cart/Carts";
import { useSelector } from "react-redux";

export const Layout = () => {
  const isOpen = useSelector((state) => state.cartOpening.isOpen);
  return (
    <Container>
      <Header />
      {isOpen && <Carts />}
      <Routers />
      <Footer />
    </Container>
  );
};

export default Layout;
