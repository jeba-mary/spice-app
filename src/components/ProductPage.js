import React from 'react';
import { connect } from 'react-redux';

import { fetchProduct } from '../actions';

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }
  render() {
    
    
    const { name, imgUrl, price, Ratings, color, size } = this.props.product;
    return (
      <div class="container">
        <div class= "row">
          <div class = "col-sm-6" style={{border: "2px solid grey"}}>
            <img src={imgUrl} class="card-img-top" alt="new" style={{width: "450px", height: "500px",  display: "block;"}}/>
          </div>
          <div class= "col-sm-6">
            <h2>{name}</h2>
            <hr />
            <span style={{ fontWeight:"500", color:"grey"}}>{Ratings}Ratings</span>
            <p>₹{price}</p>
            <div className="availablity">
              <p>Color: {color}</p>
              <p>Size: {size}</p>
            </div>
          
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchProduct })(ProductPage);