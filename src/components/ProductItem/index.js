import React, {Component} from "react";
import "./styles.css";

class ProductItem extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.product.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.product);
    }

    render() {
        let {product, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="w-35">{product.description}</td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-primary m-2"
                        onClick={this.onUpdate}>
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger m-2"
                        onClick={this.onDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;