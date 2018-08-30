import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BuyNow from './components/BuyNow';
import BuySuccess from './components/BuySuccess';
import Movies from './components/Movies';
import Comments from './components/Comments';
import NotFound404 from './components/NotFound404';
import SoldOut from './components/SoldOut';

class App extends Component {
  render() {
    return (
      <div className="golden-cinema-app">
        <BrowserRouter>
          <div className="">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/movies" component={Movies} />
              <Route path="/comments" component={Comments} />
              <Route
                path="/buynow"
                render={() => <BuyNow title="ShawShank Redemption" />}
              />
              <Route path="/buy-now" component={BuyNow} />
              <Route path="/buy-success" component={BuySuccess} />
              <Route path="/sold-out" component={SoldOut} />
              <Route component={NotFound404} />
            </Switch>
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
