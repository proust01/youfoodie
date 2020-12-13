import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { detailsUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import Rating from "../components/Rating";
import { Link } from 'react-router-dom';

export default function SellerScreen(props) {
  const sellerId = props.match.params.id;
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);

  const categories = products?.map((f) => f.category);
  const uniqCategories = _.uniq(categories).sort();
  const subProducts = (category) => {
    let filtered = products.filter((p) => p.category === category);
    return filtered;
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div
          className="banner"
          style={{ backgroundImage: `url(${user.seller.logo})` }}
        >
          <div className="col-1">
            <ul className="card card-body">
              <li>
                <div className="row start">
                  <div className="p-1">
                    <img
                      className="small"
                      src={user.seller.logo}
                      alt={user.seller.name}
                    ></img>
                  </div>
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
          </div>
        </div>
      )}

      <div className="row column">
        <div className="row button">
          <button className="primary order">Booking</button>
          <button className="primary order">Pick Up</button>
          <button className="primary order">Delivery</button>
        </div>
      </div>

      <div className="container">

        <div className="row-category">
          {loadingProducts ? (
            <LoadingBox></LoadingBox>
          ) : errorProducts ? (
            <MessageBox variant="danger">{errorProducts}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}

              {uniqCategories.map((c) => (
                // <button onclick={document.getElementById(`${c}`)?.scrollIntoView()} className="col-category">
                // </button>
                  <h3 className="col-category">{c.toUpperCase()}</h3>
              ))}
            </>
          )}
        </div>

        {/* <div className="row column"> */}
          {loadingProducts ? (
            <LoadingBox></LoadingBox>
          ) : errorProducts ? (
            <MessageBox variant="danger">{errorProducts}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
                {uniqCategories.map((c) => (
                  <div id={c} className="row-column">
                    <h1 className="category-name">{c.toUpperCase()}</h1>
                    <div className="row-menus">
                      {subProducts(c).map((product) => (
                        <Product key={product._id} product={product}></Product>
                      ))}
                    </div>
                  </div>
                ))}
            </>
          )}
        {/* </div> */}
      </div>
    </div>
  );
}
