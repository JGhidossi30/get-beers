const Favorite = (function () {
    const beers = [];

    const getBeers = function () {
        return beers;
    };

    const hasBeer = function (beer) {
        return beers.includes(beer)
    }

    const addBeer = function (beer) {
        beers.push(beer);
    };

    const removeBeer = function (beer) {
        for (let i = 0; i < beers.length; i++) {
            if (beers[i] === beer) {
                beers.splice(i, 1);
            }
        }
    }

    return {
        getBeers: getBeers,
        hasBeer: hasBeer,
        addBeer: addBeer,
        removeBeer: removeBeer
    }

})();

export default Favorite;
