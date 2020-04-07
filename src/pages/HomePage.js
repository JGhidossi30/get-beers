import React from 'react';
import axios from 'axios';

const HomePage = () => (
    <>
        <h1>The Beer Garden</h1>
        <LoadBeers/>
    </>
);

const LoadBeers = () => axios.get('https://api.punkapi.com/v2/beers')
	.then(function (res) {
		console.log(res.data);
		return <div>
				{res.data.map((value, index) => {
					return <h1 key={index}>{value}</h1>
				})}
			</div>;
	})
	.catch(error => console.error(error));

export default HomePage;
