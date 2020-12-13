import React from 'react'
import { Link } from 'react-router-dom';

function CategoryIcons() {
    return (
        <div className="row icons">
            <Link to="/search/category/pizza">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png" alt=""/>
                    <p>Pizza</p>
                </div>
            </Link>
            <Link to="/search/category/bbq">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bbq.png" alt=""/>
                    <p>BBQ</p>
                </div>
            </Link>
            <Link to="/search/category/burger">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/burger.png" alt=""/>
                    <p>Burger</p>
                </div>
            </Link>
            <Link to="/search/category/japanese">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/japanese.png" alt=""/>
                    <p>Japanese</p>
                </div>
            </Link>
            <Link to="/search/category/korean">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/korean.png" alt=""/>
                    <p>Korean</p>
                </div>
            </Link>
            <Link to="/search/name/sushi">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/sushi.png" alt=""/>
                    <p>Sushi</p>
                </div>
            </Link>
            <Link to="/search/category/asian">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/asian.png" alt=""/>
                    <p>Asian</p>
                </div>
            </Link>
            
            <Link to="/search/category/vegan">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/vegan.png" alt=""/>
                    <p>Vegan</p>
                </div>
            </Link>
            <Link to="/search/category/comfortfood">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/comfortfood.png" alt=""/>
                    <p>Comfort Food</p>
                </div>
            </Link>
            <Link to="/search/category/streetfood">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/streetfood.png" alt=""/>
                    <p>Street Food</p>
                </div>
            </Link>
            <Link to="/search/category/fastfood">
            <div className="col">
                <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png" alt=""/>
                <p>Fast Food</p>
            </div>
            </Link>
            <Link to="/search/category/healthy">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/healthy.png" alt=""/>
                    <p>Healthy</p>
                </div>
            </Link>
            
            <Link to="/search/name/wings">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/wings.png" alt=""/>
                    <p>Wings</p>
                </div>
            </Link>
            <Link to="/search/category/bakery">
                <div className="col">
                    <img className="icons" src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bakery.png" alt=""/>
                    <p>Bakery</p>
                </div>
            </Link>
        
        </div>
    );
};

export default CategoryIcons
