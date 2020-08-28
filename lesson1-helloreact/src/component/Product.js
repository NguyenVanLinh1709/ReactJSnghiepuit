import React from 'react';

class Product extends React.Component{
  render(){
    return (
    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
        <div className="card">
          <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg" alt="logo" />
          <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
          </div>
      </div>
    </div>
      
    )
  };
}

export default Product;
