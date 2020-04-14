import React from 'react';
import axios from 'axios';
import Favorite from "../models/Favorite";
import './Details.css';
import empty from '../img/favorite-empty.png';
import filled from '../img/favorite-filled.png';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: decodeURIComponent(props.match.params.beer),
            details: [],
            faved: false
        };
    }

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.beer}`)
            .then(res => {
                const details = res.data[0];
                this.setState({details: details});
            })
            .catch(err => console.log(err));

        const favorites = Favorite.getBeers();
        this.setState({faved: Favorite.hasBeer(this.state.beer)});
    }

    imagesPaths = {
        Unfavorite: filled,
        Favorite: empty
    }

    Fav = () => {
        const fav = this.getImageName();
        return (
            <>
                <img src={this.imagesPaths[fav]} onClick={() => this.toggleImage()}/>
                <p>{fav}</p>
            </>
        );
    }

    toggleImage = () => {
        if (!this.state.faved) {
            Favorite.addBeer(this.state.beer);
        } else {
            Favorite.removeBeer(this.state.beer);
        }
        this.setState(state => ({faved: !state.faved}))
    }

    getImageName = () => this.state.faved ? 'Unfavorite' : 'Favorite';

    render() {
        console.log(this.state.details)
        const details = this.state.details;
        let volume = "";
        for (const x in details.volume) {
            volume += details.volume[x] + " ";
        }
        let boil_volume = "";
        for (const x in details.boil_volume) {
            boil_volume += details.boil_volume[x] + " ";
        }
        let method = "";
        for (const x in details.method) {
            switch (x) {
                case "mash_temp":
                    method += "Mash Temp (";
                    for (const y in details.method[x]) {
                        method += details.method[x][y].duration + " @ ";
                        for (const z in details.method[x][y].temp) {
                            method += details.method[x][y].temp[z] + " ";
                        }
                        method = method.substr(0, method.length - 1) + "), ";
                    }
                    break;
                case "fermentation":
                    method += "Fermentation (";
                    for (const z in details.method[x].temp) {
                        method += details.method[x].temp[z] + " ";
                    }
                    method = method.substr(0, method.length - 1) + "), ";
                    break;
                case "twist":
                    method += "Twist: " + details.method[x];
                    break;
                default:
                    break;
            }
        }
        let ingredients = "";
        for (const x in details.ingredients) {
            ingredients += x.charAt(0).toUpperCase() + x.substr(1, x.length - 1) + " (";
            if (x === "yeast") {
                ingredients += details.ingredients[x];
            } else {
                for (const y in details.ingredients[x]) {
                    ingredients += details.ingredients[x][y].name + " ";
                    for (const z in details.ingredients[x][y].amount) {
                        ingredients += details.ingredients[x][y].amount[z] + " ";
                    }
                    ingredients = ingredients.substr(0, ingredients.length - 1) + ", ";
                }
            }
            ingredients += "), ";
        }
        let food_pairing = "";
        for (const x in details.food_pairing) {
            food_pairing += details.food_pairing[x] + ", ";
        }
        return (
            <>
                <div className="beer-details">
                    <div className="beer">
                        <div>
                            <p>{this.state.beer}</p>
                        </div>
                        <div>
                            <img src={this.state.details.image_url} id="beer"/>
                        </div>
                        <div className="favorite">
                            <this.Fav/>
                        </div>
                    </div>
                    <div className="details">
                        <b>Tagline: </b>{details.tagline} <br/>
                        <b>First Brewed: </b>{details.first_brewed} <br/>
                        <b>Description: </b>{details.description} <br/>
                        <b>Abbreviation: </b>{details.abv} <br/>
                        <b>IBU: </b>{details.ibu} <br/>
                        <b>Target FG: </b>{details.target_fg} <br/>
                        <b>Target OG: </b>{details.target_og} <br/>
                        <b>EBC: </b>{details.ebc} <br/>
                        <b>SRM: </b>{details.srm} <br/>
                        <b>pH: </b>{details.ph} <br/>
                        <b>Attenuation Level: </b>{details.attenuation_level} <br/>
                        <b>Volume: </b>{volume} <br/>
                        <b>Boil Volume: </b>{boil_volume} <br/>
                        <b>Method: </b>{method.substr(0, method.length - 2)} <br/>
                        <b>Ingredients: </b>{ingredients.substr(0, ingredients.length - 2)} <br/>
                        <b>Food Pairing: </b>{food_pairing.substr(0, food_pairing.length - 2)} <br/>
                        <b>Brewer's Tips: </b>{details.brewers_tips}
                    </div>
                </div>
            </>
        );
    }
}
