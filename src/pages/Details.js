import React from 'react';
import axios from 'axios';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            beer: props.match.params.beer
        };
    }

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.beer}`)
            .then(res => {
                const details = res.data[0];
                this.setState({details: details});
                console.log(this.state.details);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="beer-details">
                    Name: {this.state.details.name} <br/>
                    <img src={this.state.details.image_url}/> <br/>
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
            </>
        );
    }
}
