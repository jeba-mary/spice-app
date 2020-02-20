import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../actions';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
 
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    return this.props.products.map(product =>{
      return (
        <div className="card"  key={product.id} >
          <Link to ={`/products/${product.id}`} style={{textDecoration: "none", color: "black"}}>
          <img src={product.imgUrl} class="card-img-top" alt="new" style={{width: "150px", height: "150px;",  display: "block;"}}/>
          <div class="card-body">
            <p class="card-text" style={{textAlign: "center"}}>{product.name}</p>
            <div class="price" style={{textAlign: "center"}} >
              <span>₹{product.price}</span>
            </div>
          </div>
          </Link>
        </div>
      );
    });
  }
  render() {
    return (
      <div class="row row-cols-4">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  }
}

export default connect(mapStateToProps, { fetchProducts, fetchProduct})(HomePage);