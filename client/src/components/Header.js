import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        console.log(this.props);
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo">
                        Emaily
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Header);