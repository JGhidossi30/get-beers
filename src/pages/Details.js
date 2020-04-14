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
                        <b>Volume: </b>{volume} <br />
                        <b>Boil Volume: </b>{boil_volume} <br />
                        <b>Method: </b> <br/>
                    </div>
                </div>
            </>
        );
    }
}

// const Details = () => (
//     <>
//         <div className="beer-details">
//             <div className="beer">
//                 <div>
//                     {"hii"}
//                     {/*{getBeer(beers)} <br/>*/}
//                 </div>
//                 <div>
//                     {/*<img src={""this.state.details.image_url""} id="beer"/> <br/>*/}
//                 </div>
//                 <div>
//                     {/*<this.Fav/>*/}
//                 </div>
//             </div>
//             {/*<div className="details">*/}
//             {/*    Tagline: {this.state.details.tagline} <br/>*/}
//             {/*    First Brewed: {this.state.details.first_brewed} <br/>*/}
//             {/*    Description: {this.state.details.description} <br/>*/}
//             {/*    Abbreviation: {this.state.details.abv} <br/>*/}
//             {/*    IBU: {this.state.details.ibu} <br/>*/}
//             {/*    Target FG: {this.state.details.target_fg} <br/>*/}
//             {/*    Target OG: {this.state.details.target_og} <br/>*/}
//             {/*    EBC: {this.state.details.ebc} <br/>*/}
//             {/*    SRM: {this.state.details.srm} <br/>*/}
//             {/*    pH: {this.state.details.ph} <br/>*/}
//             {/*    Attenuation Level: {this.state.details.attenuation_level} <br/>*/}
//             {/*    /!*Volume: {this.state.details.volume.unit }*!/*/}
//             {/*    /!*Volume: { this.state.details.volume.value } { this.state.details.volume.unit } <br />*!/*/}
//             {/*    /!*Boil Volume: { this.state.details.boil_volume } <br />*!/*/}
//             {/*    /!*Method <br />*!/*/}
//
//         </div>
//     </>
// );
//
// function getBeer(beers) {
//     console.log(beers);
//     return "";
// }
//
// export default Details;

// export default class Details extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             details: props.state.details,
//             favorites: props.state.favorites,
//             beer: props.state.beer
//         };
//     }
//
//     componentDidMount() {
//         axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.beer}`)
//             .then(res => {
//                 const details = res.data[0];
//                 this.setState({details: details});
//             })
//             .catch(err => console.log(err));
//     }
//
//     render() {
//         if (this.state.details === undefined || this.state.details.length === 0) {
//             return <NotFound page={this.state.beer}/>
//         }
//         return (
//             <>
//                 <div className="beer-details view">
//                     <div className="beer">
//                         <div>
//                             {this.state.details.name} <br/>
//                         </div>
//                         <div>
//                             <img src={this.state.details.image_url} id="beer"/> <br/>
//                         </div>
//                         <div>
//                             <this.Fav/>
//                         </div>
//                     </div>
//                     <div className="details">
//                         Tagline: {this.state.details.tagline} <br/>
//                         First Brewed: {this.state.details.first_brewed} <br/>
//                         Description: {this.state.details.description} <br/>
//                         Abbreviation: {this.state.details.abv} <br/>
//                         IBU: {this.state.details.ibu} <br/>
//                         Target FG: {this.state.details.target_fg} <br/>
//                         Target OG: {this.state.details.target_og} <br/>
//                         EBC: {this.state.details.ebc} <br/>
//                         SRM: {this.state.details.srm} <br/>
//                         pH: {this.state.details.ph} <br/>
//                         Attenuation Level: {this.state.details.attenuation_level} <br/>
//                         {/*Volume: {this.state.details.volume.unit }*/}
//                         {/*Volume: { this.state.details.volume.value } { this.state.details.volume.unit } <br />*/}
//                         {/*Boil Volume: { this.state.details.boil_volume } <br />*/}
//                         {/*Method <br />*/}
//                     </div>
//                 </div>
//             </>
//         );
//     }
//
//     Fav = () => {
//         return (
//             <>
//                 {Favorite.hasBeer(this.state.beer) ? "Unfavorite" : "Favorite"}
//                 <img
//                     src={Favorite.hasBeer(this.state.beer) ?
//                         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" :
//                         "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-512.png"} id="fav" onClick={() => this.favClick()}/>
//             </>
//         );
//     }
//
//     favClick = () => {
//         if (Favorite.hasBeer(this.state.beer)) {
//             Favorite.removeBeer(this.state.beer);
//         } else {
//         Favorite.addBeer(this.state.beer);
//     }
//      console.log(Favorite.getBeers()[0]);
//     }
// }
