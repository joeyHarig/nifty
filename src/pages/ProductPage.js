import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/uiElements/Header';
import '../scss/product-page.scss';

const ItemPage = props => {
    const prodId = useParams().userId;

    // find the product item
    console.log(prodId);
    const item = props.productData.filter(item => item.id === prodId)[0];
    console.log(item);
    return (
        <main id="product-page" >
            <section>
                <div
                    className="image"
                    style={{ backgroundImage: `url(${item.img}) `}}
                />
                <div className="product-info">
                    <Header text={item.name} />
                    <p>{item.description}</p>
                    <div className="selectors">
                        
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ItemPage;