import React, {Component} from "react";
import "./verticalList.css";

class VerticalList extends Component {
    
    constructor() {
        super();

        this.state = {
            listOptions: [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"]],
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleWindowResize);
        window.scrollTo(0,0);
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
        console.log(parentElement);

        this.setState({
            scrollDistanceShowImage: parentElement.top - body.top,
        })
    }

    render() {
        return(
            <ul id="vertical-list">
                {
                    this.state.listOptions.map((item, index) => (
                        <li className="vlist-option text" key={index} onClick={this.selectOption} >
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
