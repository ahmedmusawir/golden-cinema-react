import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import BuyNow from './components/BuyNow';
import BuySuccess from './components/BuySuccess';
import Movies from './components/Movies';
import Comments from './components/Comments';

class App extends Component {
  render() {
    return (
      <div className="golden-cinema-app">
        <BrowserRouter>
          <div className="">
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/movies" component={Movies} />
            <Route path="/comments" component={Comments} />
            <Route
              path="/buynow"
              render={() => <BuyNow title="ShawShank Redemption" />}
            />
            <Route path="/buysuccess" component={BuySuccess} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
