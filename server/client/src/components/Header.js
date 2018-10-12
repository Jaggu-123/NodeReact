import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo darken-3">
                    <a href="#" className="left brand-logo">
                        Emaily
                    </a>

                    <ul className="right">
                        <li>
                            <a href="#">Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
