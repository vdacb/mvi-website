import React, {Component} from "react";
import "./dropdownList.css";

class DropdownList extends Component {

    constructor() {
        super();

        this.state = {
            chosenOption: 1,
        }
    }

    render() {
        return(
            <div id="dropdown-list-container">
                <div id="options-container">
                    <div className="option title">Alfabetos</div>
                    <div className="option title">Escritas</div>
                    <div className="option title">Vários</div>
                </div>

                <div id="items-container">
                    {
                        this.props.list[this.state.chosenOption][1].map(item => (
                            <div className="item text">{item}</div>
                        ))
                    }
                </div>

            </div>
        );
    }
}

export default DropdownList;