import React from 'react';
import axios from 'axios';
import {
    Link,
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom';
import Details from './Details';
import Favorite from "../models/Favorite";
import Menu from "../components/Menu";
import Favorites from "../components/Favorites";

export default class extends React.Component {
    state = {
        beers: [],
        favorites: []
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
        console.log(favorites);
    }

    render() {
        return (
            <>
                <h1>The Beer Garden</h1>
                <div className="container">
                    <div className="menuContainer">
                        <h2>Menu</h2>
                        <Menu beers={this.state.beers}/>
                    </div>
                    <div className="favoritesContainer">
                        <h2>Favorites</h2>
                        <Favorites favorites={this.state.favorites}/>
                    </div>
                </div>
            </>
        );
    }
}
