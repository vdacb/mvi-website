import React, {Component} from "react";
import MenuIcon from "./../menuIcon/menuIcon";
import Menu from "./../../pages/menu/menu";
import "./header.css";

class Header extends Component {
    
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
    }

    handleMenuIconClick() {
        this.setState({
            showMenu: !this.state.showMenu,
        });
    }

    render() {
        var menu = null;

        if(this.state.showMenu) {
            menu = <Menu />
        }

        return(
            <header>
                {menu}
                <div id="menu-icon-warp" onClick={this.handleMenuIconClick}>
                    <MenuIcon menuVisible={this.state.showMenu} />
                </div>
                <div id="language-select">
                    <div className="text">en</div>
                    <div className="deco-line"></div>
                    <div className="text">pt</div>
                </div>
            </header>
        )
    }
}

export default Header;