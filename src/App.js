// 1) dependency imports
import React, { useState } from 'react';
import { 
  Route,
  Redirect,
  Switch, 
  BrowserRouter as Router
} from 'react-router-dom';

// 2) Dummy data
import ProductData from './dummyData/ProductData';

// 3) component imports
import Navigation from './components/nav/Navigation';
import Footer from './components/nav/Footer';
import Map from './pages/Map';
import Home from './pages/Home';
import Styles from './pages/Styles';
import ProductPage from './pages/ProductPage';

// 4) style imports
import './scss/index.scss'

const App = () => {
  const [productData, setProductData] = useState(ProductData);
  
  return (
    <div className="App">
      <Router>
			  <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home productData={productData} />
          </Route>
          <Route path="/items" exact>
            <Styles productData={productData} />
          </Route>
          <Route path="/styles/:userId" exact>
						<ProductPage productData={productData} />
					</Route>
          <Route path="/map" exact>
            <Map />
          </Route>
          <Route path="/ar_view" exact>
            <Home productData={productData} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
