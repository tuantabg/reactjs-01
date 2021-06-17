import React, {Component} from "react";
import MainMenu from "../MainMenu";
import Form from "../Form";
import Product from "../Product";
import Title from "../Common/Title";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    onSubmit = (data) => {
        let randomString = require("randomstring");
        let {products} = this.state;

        if(data.id === ""){
            data.id = randomString.generate(7);
            products.push(data);
            this.setState({
                products: products
            });
        }else {
            let newProducts = [...this.state.products];
            newProducts = newProducts.filter(function (product) {
                return product.id === data.id;
            });
            this.setState({
                products: [...newProducts]
            });
        }
    }

    onDelete = (id) => {
        let newProducts = [...this.state.products];
        newProducts = newProducts.filter(function (product) {
            return product.id !== id;
        });
        this.setState({
            products: [...newProducts]
        });
    }

    onUpdate = (data) => {
        let newProducts = [...this.state.products];
        newProducts = newProducts.filter(function (product) {
            return product.id === data.id
        });
        this.setState({
            products: [...newProducts]
        });
    }

    render() {
        let {products} = this.state;

        return (
            <div className="wrapper">
                <div className="container-full bg-primary">
                    <MainMenu />
                </div>
                <div className="container">
                    <div className="row">
                        <Title/>
                        <Form
                            onSubmit={this.onSubmit}
                            products={products}
                        />
                        <Product
                            products={products}
                            onDelete={this.onDelete}
                            onUpdate={this.onUpdate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;