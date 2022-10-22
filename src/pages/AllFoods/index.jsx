import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { CommonSection } from "../../components/UI/CommonSection";
import { AllFoodContainer } from "./style";
import products from "../../assets/fake-data/products";
import { Product } from "../../components/UI/ProductCard";
import ReactPaginate from "react-paginate";

export const AllFoods = () => {
  // const [productData, setProductData] = useState(products);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  // eslint-disable-next-line
  const filteredValues = products.filter((item) => {
    if (search === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const productsPerPage = 8;
  const visitedPage = pageNumber * productsPerPage;
  
  //slicing
  const displayPage = filteredValues.slice(
    visitedPage,
    visitedPage + productsPerPage
  );


  //paging
  const pageCount = Math.ceil(filteredValues.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setPageNumber(0);
  }, [search]);

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);


  return (
    <AllFoodContainer>
      <CommonSection title="All foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search_widget d-flex align-items-center justify-content-between w-50 ">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="I am Looking for"
                />
                <span>
                  <i className="ri-search-line" />
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting_widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage?.map((item) => {
              return (
                <Col
                  className="mt-4"
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                  key={item.id}
                >
                  <Product item={item} />
                </Col>
              );
            })}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactPaginate
                // activeLinkClassName={true}
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nex
                Label={"Next"}
                containerClassName={"paginationBttns"}
              />
            </div>
          </Row>
        </Container>
      </section>
    </AllFoodContainer>
  );
};

export default AllFoods;
