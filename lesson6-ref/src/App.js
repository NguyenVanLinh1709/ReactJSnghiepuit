import React from 'react';
import './App.css';

class App extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            product : [
                {
                    id: 1,
                    name: 'Apple',
                    price: 1000,
                    img: 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-pro-max-64-gb.jpg',
                    status: true
                },
                {
                    id: 2,
                    name: 'Samsung',
                    price: 2000,
                    img: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1045821718.jpeg',
                    status: true
                },
                {
                    id: 3,
                    name: 'Oppo',
                    price: 4000,
                    img: 'https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-400x400.jpg',
                    status: true
                },
                {
                    id: 4,
                    name: 'Huawei',
                    price: 2000,
                    img: 'https://cdn.tgdd.vn/Products/Images/42/214648/huawei-y9sb-blue-600x600.jpg',
                    status: true
                },
                {
                    id: 5,
                    name: 'Vsmart',
                    price: 4000,
                    img: 'https://cdn.tgdd.vn/Products/Images/42/217438/vsmart-active-3-6gb-emerald-green-600x600-400x400.jpg',
                    status: true
                },
                {
                    id: 6,
                    name: 'Sony',
                    price: 2100,
                    img: 'https://cdn.tgdd.vn/Products/Images/42/219134/sony-xperia-1-ii-600x600--600x600.jpg',
                    status: true
                },
            ],
            isActive : true
        }
        // this.onSetState = this.onSetState.bind(this)
    }

    onSetState = () =>{
        if (this.state.isActive === true){
            this.setState({
                isActive : false
            })
        }else{
            this.setState({
                isActive : true
            })
        }
    }

    render() {

        let elements = this.state.product.map((product, index) => {
            if (this.state.isActive === true){
                let result = '';
                if (product.status) {
                    result = <tr key={index}>
                                <td> {product.id} </td>
                                <td> {product.name} </td>
                                <td>
                                    <span className="badge badge-primary">{product.price}</span>
                                </td>
                            </tr>
                }
                return result;
            }else{
                return null;
            }
        })

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>{elements}</tbody>
                </table>
                <button type="button" className="btn btn-primary" onClick={this.onSetState}>
                    Active = {this.state.isActive === true ? 'true' : 'false'}
                </button>
            </div>
        );
    }
}

export default App;

