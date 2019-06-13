import React, {Component} from "react";
import Footer from "./../footer/footer";
import "./fullScreenPopup.css";

class FullScreenPopup extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        var headline;
        var text;

        if(this.props.news) {
            headline = (
                <div className="news">
                    <p className="text">{this.props.news.from}</p>
                    <div className="title">{this.props.news.title}</div>
                    <div className="seperation-bar"></div>
                </div>  
            )

            text = this.props.news.text.split("\n");
            console.log(text);
        }

        else if(this.props.title) {
            headline = (
                <div className="title">{this.props.title}</div>
            )
        }

        return(
            <div id="fspopup-container">
                <img id="close-btn" src={window.location.origin + "/img/black_cross.png"} onClick={this.props.closePopup} />
                <div id="fspopup-content">
                    {headline}    
                    <div id="p-container">
                        {
                            text.map((pg, index) => (
                                <p key={index} className="text">{pg}</p>
                            ))
                        }
                    </div>
                    <div id="main-img-container">
                        <img src={window.location.origin + "/img/noticias/" + this.props.news.image} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FullScreenPopup;
