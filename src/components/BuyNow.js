import React, { Component } from 'react';
import InputGroup from './InputGroup';

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
    console.log('form submitted');
    console.log(this.state);
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
            <img className="img-fluid" src={poster} alt="" />
          </div>
          <div className="col-md-8">
            <h3 className="buy-title">
              {movie}
              <span className="badge badge-secondary float-right">$9.99</span>
            </h3>
            <form onSubmit={this.onSubmit} className="mt-5">
              <InputGroup
                name="name"
                type="name"
                placeholder="Enter Name"
                value={email}
                onChange={this.onChange}
                error={errors.name}
              />
              <InputGroup
                name="address"
                type="address"
                placeholder="Enter Address"
                value={email}
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
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <InputGroup
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
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
