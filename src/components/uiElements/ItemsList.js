import React from 'react';
import Header from './Header';
import ItemCard from './ItemCard';
import '../../scss/items-list.scss';

const ItemsList = props => {
    
    return (
        <section className="items-list" >
            <Header 
                text={props.header}
                type="withButton" 
            />
            <ul>
                {props.items.map(item => (
                    <ItemCard
                        item={item}
                        key={item.id}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ItemsList;