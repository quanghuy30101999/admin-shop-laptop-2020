import { Component, Fragment } from 'react'
import './css/header.css'
import './css/listproduct.css'

import ListProducts from './ListProducts'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'


class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* Header */}
                <Header />
                {/* End Header */}
                {/* body */}
                    
                 <Body />
                {/* End body */}
                <Footer />
            </Fragment>
        );
    }
}


export default Home;
