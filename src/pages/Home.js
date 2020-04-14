import React from 'react';
import axios from 'axios';
import Favorite from '../models/Favorite';
import Menu from '../components/Menu';
import Favorites from '../components/Favorites';
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            favorites: [],
            beer: ""
        };
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                const beers = res.data;
                this.setState({beers: beers});
            })
            .catch(err => console.log(err));

        this.setState({favorites: Favorite.getBeers()});
        this.setState({beer: this.props.match.params.beer});
    }

    render() {
        return (
            <>
                <div className="container">
                    <this.MenuContainer/>
                    <this.FavContainer/>
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
