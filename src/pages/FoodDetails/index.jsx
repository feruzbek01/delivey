import React, {useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { ContainerDetail } from "./style";
import products from "../../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { CommonSection } from "../../components/UI/CommonSection";
import { Product } from "../../components/UI/ProductCard";
import { useEffect } from "react";
import { cartActions } from "../../store/shoppingCart/cartSlice";
import { reviewAction } from "../../store/shoppingCart/reviewSlice";
import { useDispatch, useSelector } from "react-redux";

export const FoodDetails = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const reviewsStore = useSelector((state) => state.review);

  const { id } = useParams();

  const productSelected = products.find((value) => value.id === id);

  const [productImg, setProductImg] = useState(productSelected.image01);
  const { title, price, category, desc } = productSelected;

  const relatedProducts = products.filter(
    (value) => value.category === category
  );

  useEffect(() => {
    setProductImg(productSelected.image01);
  }, [productSelected]);

  useEffect(() => {
    window.scrollTo(0, 206);
  }, [productSelected]);

  const handleAddItem = () => {
    dispatch(
      cartActions.addItem({
        id: productSelected.id,
        title: productSelected.title,
        image01: productSelected.image01,
        price: productSelected.price,
      })
    );
  };

  const addReviewHandler = (e) => {
    e.preventDefault()

    setEmail('')
    setName('')
    setReview('')

    dispatch(
      reviewAction.addReview({
        name,
        email,
        review,
      })
    );
  };

  return (
    <ContainerDetail>
      <CommonSection title={title} />
      <section style={{ paddingTop: "40px" }}>
        <Container>
          <Row>
            <Col md="2" lg="2">
              <div className="product__images">
                <div
                  className="img_item"
                  onClick={() => setProductImg(productSelected.image01)}
                >
                  <img src={productSelected.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img_item"
                  onClick={() => setProductImg(productSelected.image02)}
                >
                  <img src={productSelected.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img_item"
                  onClick={() => setProductImg(productSelected.image03)}
                >
                  <img src={productSelected.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col md="4" lg="4">
              <div className="product__main-image">
                <img src={productImg} alt="" className={"w-100"} />
              </div>
            </Col>
            <Col md="6" lg="6">
              <div className="single__product-content">
                <h2 className="product__title">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price:
                  <span>${price}</span>
                </p>
                <p className="category">
                  {" "}
                  Category: <span>{category}</span>{" "}
                </p>

                <button className="addTOCart__btn" onClick={handleAddItem}>
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={tab === "desc" ? "tap__active" : ""}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={tab === "rev" ? "tap__active" : ""}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-5 pt-5">
                  {reviewsStore.map((value) => (
                    <div  className="review">
                      <p className="user__name mb-0">{value.name}</p>
                      <p className="user__email mb-0">{value.email}</p>
                      <p className="feedback__text mb-0">{value.review}</p>
                    </div>
                  ))}

                  {/* <div className="review">
                    <p className="user__name mb-0">Muhammadamin</p>
                    <p className="user__email mb-0">
                      muhammad.alforuq@gmail.com
                    </p>
                    <p className="feedback__text mb-0">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Muhammadamin</p>
                    <p className="user__email mb-0">
                      muhammad.alforuq@gmail.com
                    </p>
                    <p className="feedback__text mb-0">Great Product</p> */}
                  {/* </div> */}

                  <form onSubmit={addReviewHandler} className="form">
                    <div className="form__group">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type={"text"}
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="form__group">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type={"email"}
                        placeholder="Enter your Emal"
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        onChange={(e) => setReview(e.target.value)}
                        value={review}
                        rows={"5"}
                        placeholder="Enter your Description"
                      />
                    </div>

                    <button
                      type="submit"
                      className="addTOCart__btn "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-4 mb-4 ">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {relatedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={item.id}>
                <Product item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </ContainerDetail>
  );
};
