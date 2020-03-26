import React from 'react';
import ItemsList from '../components/uiElements/ItemsList';
import Icon from '../assets/icons/Icon';
import '../scss/styles.scss';

const Styles = props => {
    const { productData } = props;

    // make a new array of items
    const  popularItems = productData.filter(item => item.saved.value !== true);
    const  savedItems = productData.filter(item => item.saved.value === true);

    return (
        <main id="styles" >
            <div class="search">
                <input
                    placeholder="Search for styles..."
                />
                <span>
                    <Icon icon="image" />
                    <Icon icon="search" />
                </span>
            </div>
            <ItemsList
                header='Recommended Styles'
                items={popularItems}
            />
            <ItemsList
                header='Your Saved Styles'
                items={savedItems}
            />
        </main>
    );
};

export default Styles;