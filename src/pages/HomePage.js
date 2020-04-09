import React from 'react';
import axios from 'axios';
import {
    Link,
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom';
import Details from './Details';

export default class extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                const beers = res.data;
                this.setState({beers: beers});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h1>The Beer Garden</h1>
                <div className="container">
                    <div className="menuContainer">
                        <h2>Menu</h2>
                        <div className="menu">
                            <BrowserRouter>
                                {this.state.beers.map(beer =>
                                    <Link to={"/" + beer.name}>
                                        {beer.name}<br/>
                                    </Link>
                                )}
                                <Switch>
                                    <Route path="/:beer" component={Details}/>
                                </Switch>
                            </BrowserRouter>
                        </div>
                    </div>
                    <div className="favoritesContainer">
                        <h2>Favorites</h2>
                        <div className="favorites">
                            Hi
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
