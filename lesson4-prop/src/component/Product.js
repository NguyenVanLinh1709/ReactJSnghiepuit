import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="card" style={{width: '18rem'}}>
                    <img src={this.props.img} alt={this.props.name} style={{width : '300px'}}/>
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.props.children}
                            </h5>
                            <p className="card-text">
                                {this.props.price} VND
                            </p>
                            
                            <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Submit</a>
                        </div>
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Product;
