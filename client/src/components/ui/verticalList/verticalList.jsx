import React, {Component} from "react";
import "./verticalList.css";

class VerticalList extends Component {
    
    constructor() {
        super();

        this.handleScroll = this.handleScroll.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleWindowResize);
        window.scrollTo(0,0);
        this.props.changeLetter(this.props.listOptions[0].join(""));
        this.handleWindowResize();
    }

    componentWillUnmount() {
       window.removeEventListener("scroll", this.handleScroll);
       window.removeEventListener("resize", this.handleWindowResize);
    }

    handleScroll() {

    }

    handleWindowResize() {
        var parentElement = document.querySelector("#vertical-list").getBoundingClientRect();
        var body = document.body.getBoundingClientRect();

        this.setState({
            scrollDistanceShowImage: parentElement.top - body.top,
        })
    }

    handleClick(ev, item) {
        const options = document.querySelectorAll(".vlist-option");
        
        for(var i = 0; i < options.length; i++) {
            options[i].classList.remove("selected");
        }
        ev.target.classList.add("selected");
        this.props.changeLetter(item);
    }

    

    render() {
        return(
            <ul id="vertical-list" className={this.props.visibilityClass}>
                {
                    this.props.listOptions.map((item) => (
                        <li className={"vlist-option text" } onClick={(ev) => this.handleClick(ev, item)}  >
                            <label>{item[0]}</label>
                            <div className="horizontal-line"></div>
                            <label>{item[1]}</label>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default VerticalList;
