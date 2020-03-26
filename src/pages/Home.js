import React from 'react';
import Header from '../components/uiElements/Header';
import ItemsList from '../components/uiElements/ItemsList';
import MapIllustration from '../assets/niftyIllustrations/map_illustration.png';
import '../scss/home.scss';

const Home = props => {
    const { productData } = props;

    // make a new array of desired items
    const  popularItems = productData.filter(item => item.saved.value !== true);

    return (
        <main id="home" >
            <section className="leading-lines">
                <Header text="Find Your Style" />
                <img src={MapIllustration} />
                <p>
                    Don’t buy clothes online just to realize they don’t fit. Let nifty help you find your favorite styles in stores. Simply save the items you like and we’ll take care of the rest.
                </p>
            </section>
            <ItemsList
                header='Popular Styles'
                items={popularItems}
            />
        </main>
    );
};

export default Home;