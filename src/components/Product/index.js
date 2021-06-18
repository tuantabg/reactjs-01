import React, {Component} from "react";
import ProductItem from "../ProductItem";

class Product extends Component {
    onDelete = (id) => {
        this.props.onDelete(id)
    }
    onUpdate = (id) => {
        this.props.onUpdate(id);
    }

    render() {
        let {products} = this.props;
        let elmProducts = products.map((product, index) => {
            return (
                <ProductItem
                    key={product.id}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                />
            )
        })

        return (
            <div className="col-sm-12 col-md-8">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col" className="w-25">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmProducts}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;