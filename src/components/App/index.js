import React, {Component} from "react";
import MainMenu from "../MainMenu";
import Form from "../Form";
import Product from "../Product";
import Title from "../Common/Title";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            newProducts: null
        }
    }

    onSubmit = (data) => {
        let randomString = require("randomstring");
        let {products} = this.state;
        if(data.id === ""){
            data.id = randomString.generate(7);
            products.push(data);
        }else {
            let index = this.finterIndex(data.id);
            products[index] = data
        }
        this.setState({
            products: products,
            newProducts: null
        });
    }

    onDelete = (id) => {
        let {products} = this.state;
        let index = this.finterIndex(id);
        if (index !== -1){
            products.splice(index, 1);
            this.setState({
                products: products
            })
        }
    }

    onUpdate = (id) => {
        let {products} = this.state;
        let index = this.finterIndex(id);
        let newProducts = products[index];
        this.setState({
            newProducts: newProducts
        })
    }

    finterIndex = (id) => {
        let {products} = this.state;
        let result = -1;
        products.forEach((product, index)=> {
            if (product.id === id){
                result = index;
            }
        })
        return result;
    }

    render() {
        let {products, newProducts} = this.state;

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
                            product={newProducts}
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