import React, {Component} from "react";
import "./dropdownList.css";

class DropdownList extends Component {

    constructor() {
        super();

        this.state = {
            chosenOption: 0,
        }

        this.dropdownListRef = React.createRef();
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleContentClick = this.handleContentClick.bind(this);
    }

    componentDidMount() {
        const links = this.dropdownListRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.props.openPopup);
        }
        console.log(this.props.content);
    }

    componentWillUnmount() {
        const links = this.dropdownListRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", this.props.openPopup);
        }
    }

    handleOptionClick(clickedOption) {
        this.setState({
            chosenOption: clickedOption,
        });
    }

    handleContentClick(ev) {
        console.log("CONTENT", this.props.content);
        var selectedContent = this.props.content[ev.target.innerHTML];
        selectedContent.title = ev.target.innerHTML;
        this.props.openPopup(selectedContent);
    }

    render() {
        return(
            <div id="dropdown-list-container" ref={this.dropdownListRef}>
                <div id="options-container">
                    {
                        this.props.list.map((option, index) => (
                            <div 
                                key={index} 
                                className={this.state.chosenOption === index ? "option title selected" : "option title"} 
                                onClick={() => this.handleOptionClick(index)}
                            >
                                {option[0]}
                            </div>
                        ))
                    }
                    
                </div>

                <div id="items-container">
                    {
                        this.props.list[this.state.chosenOption][1].map(item => (
                            <div className="item text popup" onClick={this.handleContentClick}>{item}</div>
                        ))
                    }
                </div>

            </div>
        );
    }
}

export default DropdownList;
