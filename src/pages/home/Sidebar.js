import React, { Component } from 'react';
import './css/sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar col-sm-3">
                <div className="card border-dark mb-3 danhmuc" style={{maxWidth: '18rem'}}>
                    <div className="card-header text-center tieude1">DANH MỤC SẢN PHẨM</div>
                    <div className="card-body text-dark">
                    <ul>
                        <a href className="dmct"><li className="dmct">LAPTOP ASUS</li></a>
                        <a href className="dmct"><li className="dmct">LAPTOP DELL</li></a>
                        <a href className="dmct"><li className="dmct">LAPTOP LENOVO</li></a>
                        <a href className="dmct"><li className="dmct">LAPTOP HP</li></a>
                    </ul>
                    </div>
                </div>
                <div className="card border-dark mb-3 loc" style={{maxWidth: '18rem'}}>
                    <div className="card-header text-center tieude1">LỌC TÌM SẢN PHẨM</div>
                    <div className="card-body text-dark">
                    <div className="btn-group mb-4">
                        <label className="label_input tu" htmlfor>Từ :</label>
                        <input type="text" className="form-control locloc" name="name" />
                    </div>
                    <div className="btn-group mb-4">
                        <label className="label_input tu" htmlfor>Đến :</label>
                        <input type="text" className="form-control locloc" name="name" />
                    </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default Sidebar;