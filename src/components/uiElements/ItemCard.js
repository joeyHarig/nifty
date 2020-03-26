import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/item-card.scss';

const ItemCard = props => {
    const { id, saved, name, sizes, price, img } = props.item;
    
    if (saved.value) {
        return (
            <Link to={`/styles/${ id }`} >
                <li 
                    className="saved-item-card"
                    style={{ backgroundImage: `url(${img}) `}}
                >
                    <div className="info-container">
                        <h4>{ name }</h4>
                        <h4>{ price }</h4>
                    </div>
                </li>
            </Link>
        );
    } else {
        return (
            <Link to={`/styles/${ id }`} >
                <li 
                    className="item-card"
                    style={{ backgroundImage: `url(${img}) `}}
                >
                    <div className="info-container">
                        <h4>{ name }</h4>
                        <h4>{ price }</h4>
                    </div>
                </li>
            </Link>
        );   
    }
};

export default ItemCard;