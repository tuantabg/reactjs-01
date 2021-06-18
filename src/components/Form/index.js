import React, {Component} from "react";
import "./styles.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            description: "",
        }
    }

    onHandelChange = (event) => {
        let target = event.target;
        let name   = target.name;
        let value  = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onHandelSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.product){
            this.setState({
                id : nextProps.product.id,
                name : nextProps.product.name,
                price : nextProps.product.price,
                description : nextProps.product.description,
            })
        }else if (!nextProps.product){
            this.setState({
                id: "",
                name: "",
                price: "",
                description: "",
            })
        }
    }

    render() {
        let {name, price, description} = this.state;

        return (
            <div className="col-sm-12 col-md-4">
                <div className="card">
                    <h5 className="card-header" id="title_form">
                        {this.props.product ? "Form Edit" : "Form Create"}
                    </h5>
                    <div className="card-body">
                        <form onSubmit={this.onHandelSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text"
                                       name="name"
                                       id="title"
                                       className="form-control"
                                       value={name}
                                       onChange={this.onHandelChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="number"
                                       name="price"
                                       id="price"
                                       className="form-control"
                                       value={price}
                                       onChange={this.onHandelChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows="3"
                                          className="form-control"
                                          id="description"
                                          name="description"
                                          value={description}
                                          onChange={this.onHandelChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {this.props.product ? "Update" : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;