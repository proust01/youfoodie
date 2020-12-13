import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';


export default function SellerScreen(props) {

  const sellerId = props.match.params.id;
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { loading: loadingProducts, error: errorProducts, products } = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);
  
  // const categories = products.map(p => p.category);
  // console.log(categories)
  // const reducedCategories = categories.reduce((a,c) => {a.includes(c) ? a : a.push(c)},[])

  return (
    <div className="row top">
      
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="banner" style={{ backgroundImage: `url(${user.seller.logo})`}}>
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

        <div className="row category">
          {loadingProducts ? (
            <LoadingBox></LoadingBox>
          ) : errorProducts ? (
            <MessageBox variant="danger">{errorProducts}</MessageBox>
          ) : (
            <>
              {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
              <div className="row center space">
                {products.map(c => (
                  <h3>{c.category}</h3>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="col-3">
          {loadingProducts ? (
            <LoadingBox></LoadingBox>
          ) : errorProducts ? (
            <MessageBox variant="danger">{errorProducts}</MessageBox>
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
      </div>
    </div>
  );
}
