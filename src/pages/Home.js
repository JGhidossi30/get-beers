import React from 'react';
import axios from 'axios';
import Favorite from '../models/Favorite';
import Menu from '../components/Menu';
import Favorites from '../components/Favorites';
import './Home.css';
import Details from "./Details";
import Title from "../components/Title";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            favorites: [],
            beer: props.location.hash.substr(1)
        };
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                const beers = res.data;
                this.setState({beers: beers});
            })
            .catch(err => console.log(err));
        const favorites = Favorite.getBeers()
        this.setState({favorites})
    }

    render() {
        if (!(this.state.beer === undefined || this.state.beer === "")) {
            return (
                <>
                    <div className="view">
                        <Title/>
                        <div className="container" ref="container">
                            {/*<TransitionGroup>*/}
                            {/*    <CSSTransition>*/}
                            {/*<ScrollAnimation>*/}
                            <this.MenuContainer/>
                            {/*</ScrollAnimation>*/}
                            <this.FavContainer/>
                            {/*    </CSSTransition>*/}
                            {/*</TransitionGroup>*/}
                        </div>
                        {/*<div className="container">*/}
                        <Details state={this.state} ref={this.state.beer}/>
                        {/*</div>*/}
                    </div>
                </>
            );
        }
        return (
            <>
                <div>
                    <h1>The Beer Garden</h1>
                </div>
                <div className="container">
                    <this.menuContainer/>
                    <this.favContainer/>
                </div>
            </>
        );
    }

    MenuContainer = () => (
        <>
            <div className="menuContainer">
                <div>
                    <h2>Menu</h2>
                </div>
                <Menu beers={this.state.beers}/>
            </div>
        </>
    );

    FavContainer = () => (
        <>
            <div className="favoritesContainer">
                <div>
                    <h2>Favorites</h2>
                </div>
                <Favorites favorites={this.state.favorites}/>
            </div>
        </>
    );
}
