import React from "react";
import "./detailProduct.css"
export default class DetailProduct extends React.Component {
    render() {
        const list = [];
        list.push(this.props.res)
        let img = `https://shop-laptop-2020.herokuapp.com/${list[0].picture.url}`
        return (
            <div >
                <h1>DETAIL</h1>
                <div class="detail-image-product">
                    <img src={img} ></img>
                </div>
                <div class="form-detail-product">
                    <ul class="form-detail-product">
                        <li>{list[0].id}</li>
                        <li>{list[0].name}</li>
                        <li>{list[0].price}</li>
                        <li>{list[0].quantity}</li>
                        <li>{list[0].ram}</li>
                        <li>{list[0].memory}</li>
                        <li>{list[0].description}</li>
                    </ul>
                </div>

            </div>

        )
    }
}