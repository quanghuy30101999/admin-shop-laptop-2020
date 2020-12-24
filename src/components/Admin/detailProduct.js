import React from "react";
import axios from "axios";
import "../../style/detailProduct.css"
export default class DetailProduct extends React.Component {
    render() {
        const list = [];
        list.push(this.props.res)
        console.log(list[0].picture.url);
        let img = `https://shop-laptop-2020.herokuapp.com/${list[0].picture.url}`
        return (
            <div >
                <h1 class="detail-name">DETAIL</h1>
                <div class="detail-image-product">
                    <img src={img}></img>
                </div>
                <div class="form-detail-product">
                    <ul class="form-detail-product">
                        <li><span>Id:</span>{list[0].id}</li>
                        <li><span>Name:</span>{list[0].name}</li>
                        <li><span>Price:</span>{list[0].price}</li>
                        <li><span>Quantity:</span>{list[0].quantity}</li>
                        <li><span>Ram:</span>{list[0].ram}</li>
                        <li><span>Memory:</span>{list[0].memory}</li>
                        <li><span>Description:</span>{list[0].description}</li>
                    </ul>
                </div>
            </div>

        )
    }
}