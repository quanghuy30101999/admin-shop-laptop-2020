import React, { Component } from 'react';
import './css/footer.css'
class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">BKlaptop là shop laptop nổi tiếng chuyên cung cấp nhưng dòng sản phẩm laptop chuyên dụng nhất , cảm ơn bạn đã ghé thăm website</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/category/c-language/">FACEBOOK</a></li>
          <li><a href="http://scanfcode.com/category/front-end-development/">INSTAGRAM</a></li>
          <li><a href="http://scanfcode.com/category/back-end-development/">ZALO</a></li>
          <li><a href="http://scanfcode.com/category/java-programming-language/">TWISTER</a></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/about/">About Us</a></li>
          <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
          <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container ">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#">Scanfcode</a>.
        </p>
      </div>
    </div>
  </div>
</footer>
        );
    }
}

export default Footer;