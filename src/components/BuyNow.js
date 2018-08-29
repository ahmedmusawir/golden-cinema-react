import React, { Component } from 'react';
import InputGroup from './InputGroup';
import { Link } from 'react-router-dom';

class BuyNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: '',
      card: '',
      cvv: '',
      errors: {}
    };
  }
  // console.log(movie);
  onSubmit = e => {
    e.preventDefault();
    const { name, address, email, card, cvv } = this.state;

    //Check For Errors
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name Is Required'
        }
      });
      return;
    }

    if (address === '') {
      this.setState({
        errors: {
          address: 'Address Is Required'
        }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'Email Is Required'
        }
      });
      return;
    }

    if (card === '') {
      this.setState({
        errors: {
          card: 'Card Number Is Required'
        }
      });
      return;
    }

    if (cvv === '') {
      this.setState({
        errors: {
          cvv: 'CVV Number Is Required'
        }
      });
      return;
    }

    //Redirect to Home
    this.props.history.push('/buy-success');
  };
  onChange = e => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { movie, poster } = this.props.location.state;
    const { name, address, email, card, cvv, errors } = this.state;

    return (
      <div className="container buy-now-page">
        <div className="row container-body my-5 p-5 animated fadeIn">
          <div className="col-md-4">
            <Link to="/movies" className="text-light">
              <i className="fa fa-arrow-circle-left" aria-hidden="true" /> Back
              To Search
            </Link>
            <img className="img-fluid pb-2 w-100" src={poster} alt="" />
          </div>
          <div className="col-md-8">
            <h3 className="buy-title">
              {movie}
              <span className="badge badge-secondary float-right">$9.99</span>
            </h3>
            <form onSubmit={this.onSubmit} className="mt-3">
              <InputGroup
                name="name"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />
              <InputGroup
                name="address"
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={this.onChange}
                error={errors.address}
              />
              <InputGroup
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <InputGroup
                name="card"
                type="text"
                placeholder="Enter Credit Card Number"
                value={card}
                onChange={this.onChange}
                error={errors.card}
              />
              <InputGroup
                name="cvv"
                type="text"
                placeholder="Enter CVV"
                value={cvv}
                onChange={this.onChange}
                error={errors.cvv}
              />
              <button type="submit" className="btn btn-secondary btn-block">
                Process Card
              </button>
            </form>
          </div>
        </div>
        {/* end row */}
      </div>
      // end container
    );
  }
}

export default BuyNow;
