import React from 'react';
import './App.css';
import Product from './component/Product';

class App extends React.Component {
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
                status: false
            },
            {
                id: 3,
                name: 'Oppo',
                price: 4000,
                img: 'https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-400x400.jpg',
                status: false
            },
        ];

        var elements = products.map((products, index) => {
            if (products.status){
                return (
                    <Product
                        key={index}
                        img={products.img}
                        price={products.price}
                    >{products.name}
                    </Product>
                )
            }else{
                return(
                    'This product have status false',
                    <Product
                        key={index}
                        img={products.img}
                        price="Can't buy"
                    >{products.name}
                    </Product>
                )
            }
        })

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://getbootstrap.com/docs/4.0/components/navbar/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://getbootstrap.com/docs/4.0/components/navbar/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://getbootstrap.com/docs/4.0/components/navbar/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://getbootstrap.com/docs/4.0/components/navbar/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/navbar/">Action</a>
                                    <a className="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/navbar/">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/navbar/">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="https://getbootstrap.com/docs/4.0/components/navbar/">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {elements}
                        </div>
                    </div>
                </div>
                    
            </div>
        );
    }
}

export default App;
