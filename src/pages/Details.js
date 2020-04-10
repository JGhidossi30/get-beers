import React from 'react';
import axios from 'axios';
import Favorite from "../models/Favorite";
import NotFound from './NotFound';
import './Details.css';

const imagesPath = {
    minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
    plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png"
}

export default class Details extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            details: props.state.details,
            favorites: props.state.favorites,
            beer: props.state.beer
        };
    }

    componentDidMount() {
        console.log(this.props);
        // window.addEventListener("scroll", )
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.beer}`)
            .then(res => {
                const details = res.data[0];
                this.setState({details: details});
            })
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.details === undefined || this.state.details.length === 0) {
            return <NotFound page={this.state.beer}/>
        }
        return (
            <>
                <div className="beer-details view">
                    <div className="beer">
                        <div>
                            {this.state.details.name} <br/>
                        </div>
                        <div>
                            <img src={this.state.details.image_url} id="beer"/> <br/>
                        </div>
                        <div>
                            <this.Fav/>
                        </div>
                    </div>
                    <div className="details">
                        Tagline: {this.state.details.tagline} <br/>
                        First Brewed: {this.state.details.first_brewed} <br/>
                        Description: {this.state.details.description} <br/>
                        Abbreviation: {this.state.details.abv} <br/>
                        IBU: {this.state.details.ibu} <br/>
                        Target FG: {this.state.details.target_fg} <br/>
                        Target OG: {this.state.details.target_og} <br/>
                        EBC: {this.state.details.ebc} <br/>
                        SRM: {this.state.details.srm} <br/>
                        pH: {this.state.details.ph} <br/>
                        Attenuation Level: {this.state.details.attenuation_level} <br/>
                        {/*Volume: {this.state.details.volume.unit }*/}
                        {/*Volume: { this.state.details.volume.value } { this.state.details.volume.unit } <br />*/}
                        {/*Boil Volume: { this.state.details.boil_volume } <br />*/}
                        {/*Method <br />*/}
                    </div>
                </div>
            </>
        );
    }

    Fav = () => {
        return (
            <>
                {Favorite.hasBeer(this.state.beer) ? "Unfavorite" : "Favorite"}
                <img
                    src={Favorite.hasBeer(this.state.beer) ?
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" :
                        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-512.png"} id="fav" onClick={() => this.favClick()}/>
            </>
        );
    }

    favClick = () => {
        if (Favorite.hasBeer(this.state.beer)) {
            Favorite.removeBeer(this.state.beer);
        } else {
        Favorite.addBeer(this.state.beer);
    }
     console.log(Favorite.getBeers()[0]);
    }
}
