import React, {Component} from "react";
import classNames from "classnames";
import "./dropdownList.css";

class DropdownList extends Component {

    constructor() {
        super();

        this.state = {
            chosenOption: 1,
        }

        this.dropdownListRef = React.createRef();
        this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    componentDidMount() {
        const links = this.dropdownListRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.props.openPopup);
        }
    }

    componentWillUnmount() {
        const links = this.dropdownListRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", this.props.openPopup);
        }
    }

    handleOptionClick(ev) {
        if(this.state.selectedOption !== "") {
            this.setState({
                selectedOption: "",
            });
        }
    }

    render() {
        console.log("LIST", this.props.list);
        return(
            <div id="dropdown-list-container" ref={this.dropdownListRef}>
                <div id="options-container">
                    {
                        this.props.list.map(option => (
                            <div className="option title" onClick={this.handleOptionClick} >{option[0]}</div>
                        ))
                    }
                    
                </div>

                <div id="items-container">
                    {
                        this.props.list[this.state.chosenOption][1].map(item => (
                            <a className="item text popup">{item}</a>
                        ))
                    }
                </div>

            </div>
        );
    }
}

export default DropdownList;