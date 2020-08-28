import React from 'react';
import './App.css';
import Product from './component/Product'

class App extends React.Component {

    onClick(){
        console.log('This is handling event');
    }

    render() {

        var products = [
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
        ];

        var elements = products.map((products, index) => {
            if (products.status) {
                return (
                    <Product
                        key={index}
                        img={products.img}
                        price={products.price}
                    >{products.name}
                    </Product>
                )
            }else{
                return 0
            }
        })

        return (
            <div>

                <div className="row">
                    {elements}
                </div>

                <div>
                    <div className="col-xs-1-12">
                        <button type='button' className='btn btn-warning' onClick={ this.onClick }>Click me</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;

