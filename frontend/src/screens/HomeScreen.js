import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listSellers, listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";
import Rating from "./../components/Rating";
import CategoryIcons from "../components/CategoryIcons";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  const {
    loading: loadingTopSellers,
    error: errorTopSellers,
    users: topSellers,
  } = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = useSelector((state) => state.userSellersList);

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
    dispatch(listSellers());
  }, [dispatch]);

  return (
    <div>
      <div className="row banner">
        <div className="col-1">
          <h1 className="menu-name">Crave it? Get it</h1>
          <p>Search for a favourite restaurant, cuisine or dish.</p>
        </div>
        <div className="col-2">
          {loadingTopSellers ? (
            <LoadingBox></LoadingBox>
          ) : errorTopSellers ? (
            <MessageBox variant="danger">{errorTopSellers}</MessageBox>
          ) : (
            <>
              {topSellers.length === 0 && (
                <MessageBox>No Seller Found</MessageBox>
              )}
              <Carousel
                className="carousel"
                showArrows
                autoPlay
                showThumbs={false}
              >
                {topSellers.map((seller) => (
                  <div key={seller._id}>
                    <Link to={`/seller/${seller._id}`}>
                      <img src={seller.seller.logo} alt={seller.seller.name} />
                      <p className="legend">{seller.seller.name}</p>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </>
          )}
        </div>
      </div>

      <CategoryIcons />

      <h2>Recommended Restaurat</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <div className="row center">
            {sellers.map((user) => (
              <ul className="card card-body">
                <li>
                  <div className="row start">
                    <Link to={`/seller/${user._id}`}>
                      <div className="p-1">
                        <img
                          className="small"
                          src={user.seller.logo}
                          alt={user.seller.name}
                        ></img>
                      </div>
                    </Link>
                    <div className="p-1">
                      <h1>{user.seller.name}</h1>
                    </div>
                  </div>
                </li>
                <li>
                  <Rating
                    rating={user.seller.rating}
                    numReviews={user.seller.numReviews}
                  ></Rating>
                </li>
                <li>
                  <a href={`mailto:${user.email}`}>Contact Seller</a>
                </li>
                <li>{user.seller.description}</li>
              </ul>
            ))}
          </div>
        </>
      )}

      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
