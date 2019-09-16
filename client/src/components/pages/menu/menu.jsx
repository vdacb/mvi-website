import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import PopupLink from "../../ui/popupLink/popupLink";
import "./menu.css";

class Menu extends Component {

    constructor() {
        super();

        this.state = {
            menuItems: [
                {
                    title: "Alfabetos",
                    link: "/alfabetos",
                },
                {
                    title: "Equipamentos",
                    link: "/equipamentos",
                },
                {
                    title: "Visitas",
                    link: "/visitas",
                },
                {
                    title: "História universal",
                    link: "/historia_universal",
                },
                {
                    title: "Glossário",
                    link: "/glossario",
                },
                {
                    title: "Museus",
                    link: "/museus",
                },
                {
                    title: "Notícias",
                    link: "/noticias",
                },
                {
                    title: "Personalidades",
                    link: "/personalidades",
                },
            ]
        }
    }

    render() {
        return(
            <div id="menu-container">
                <NavLink to="/">
                    <div id="home-link" className="title">Museu Virtual da Imprensa</div>
                </NavLink>

                <ul id="menu">
                    {
                        this.state.menuItems.map(item => (
                            <li className="menu-item">
                                <NavLink to={item.link}>{item.title + "."}</NavLink>
                            </li>
                        ))
                    }
                </ul>

                <div className="link-container">
                    <PopupLink link="about" text="Sobre"/>
                    <PopupLink link="ficha_tecnica" text="Ficha técnica" />
                </div>
            </div>
        );
    }
}

export default Menu;