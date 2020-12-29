import React, { Component } from 'react';
import '../../style/static.css';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import callAPI from "../../callAPI/callAPI";
import callPARAM from "../../callAPI/callAPI"

import Axios from 'axios';
class Static extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            statusName: '',
            statusValue: '',
            revenue: '',
            data: {},
            status: false
        }

    }
    callAPI() {
        var listOrder = []
        let statusName = []
        let user = ''
        callAPI.callAPI('count_orders', 'GET', listOrder, localStorage.getItem('token')).then((res) => {
            this.setState({
                statusName: Object.keys(res.data.orders),
                statusValue: Object.values(res.data.orders),
            })
        }).then(
            callAPI.callAPI('count_users', 'GET', user, localStorage.getItem('token')).then((res) => {
                this.setState({ user: res.data.user_quantity })
                console.log(this.state.user)
            })).then(
                () => {
                    this.setState({
                        status: true
                    })
                }).then(() => {
                    this.setState({
                        data: {
                            labels: this.state.statusName,
                            datasets: [
                                {
                                    label: "Tổng đơn hàng",
                                    data: this.state.statusValue,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',

                                    ]
                                }
                            ]
                        }
                    })
                })
        this.getStaticProduct();
    }
    getStaticProduct() {
        var x = [];
        var tmp = [];
        var listProduct = [];
        var listRevenue = [];
        callAPI.callPARAM('count_revenue', 'GET', x, localStorage.getItem('token'), 2020).then(res => {
            console.log("static", res.data)
            const x = Object.values(res.data);
            for (var i of x) {
                tmp.push(i)
            }
        }).then(console.log("product", x)).then(res => {
            for (var iteam of tmp) {
                listProduct.push(iteam.product_quantity)
                listRevenue.push(iteam.revenue)
            }
            console.log(listRevenue)
        }).then(() => {
            this.setState({
                dataProduct: {
                    labels: [
                        "Tháng 1",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12",

                    ],
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#d45850", "#f14850", "#6e5850", "#4f5850", "#245850", "#045850", "#c45850", "#e45850",
                            ],
                            data: listProduct,

                        }
                    ]
                },
                dataRevenue: {
                    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",],
                    datasets: [
                        {
                            data: listRevenue,
                            label: "2020",
                            borderColor: "#3e95cd",
                            fill: false
                        },
                        {
                            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                            label: "2019",
                            borderColor: "#8e5ea2",
                            fill: false
                        },

                    ]
                }
            })
        })
    }
    componentDidMount() {
        this.callAPI();


    }
    render() {
        return (
            <div class="static">
                <div class="static-user">
                    <div class='static-user-content'>
                        <img class="img-background" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAY9x4-O-NnKHQ96ylko8mzE1JM46QT_EwA&usqp=CAU"></img>
                        <p> Hiện có <span>{this.state.user}</span>Tài khoản đã đăng kí</p>
                    </div>
                </div>

                <div class="view-1">
                    <div class="static-order">
                        <h1>Thống kê đơn hàng</h1>
                        <Bar
                            data={this.state.data}
                            options={{
                                title: {
                                    text: 'Largest Cities In ',
                                    fontSize: 25
                                },
                            }}
                        />
                    </div>
                    <div class="static-product">
                        <h1 class="sllls">Số lượng sản phẩm đã bán </h1>
                        <Doughnut
                            data={this.state.dataProduct}
                            option={{
                                title: {
                                    display: true,
                                    text: "Predicted world population (millions) in 2050"
                                }
                            }}
                        />
                    </div>
                </div>
                <div class="view-2">
                    <h1>Doanh thu</h1>

                    <div class="revenue">
                        <Line
                            data={this.state.dataRevenue}
                            options={{
                                title: {
                                    display: true,
                                    text: "World population per region (in millions)"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Static;