import React from 'react';

class Product extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.onBuyProduct = this.onBuyProduct.bind(this)
    // }

    // onBuyProduct(){
    //     alert (this.props.children + '-' + this.props.price);
    //     console.log(this.props.children + '-' + this.props.price)
    // }

    onBuyProduct2 = () => {
        alert (this.props.children + '-' + this.props.price);
        console.log(this.props.children + '-' + this.props.price)
    }

    render() {
        return (
            <div>

                <div className="card" style={{width: '18rem'}}>
                <img src={this.props.img} alt={this.props.name} style={{width : '300px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.children}
                        </h5>
                        <p className="card-text">
                            {this.props.price} VND
                        </p>
                        <button type='button' className="btn btn-primary" onClick={this.onBuyProduct2}>Buy</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;
