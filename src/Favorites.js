var Favorites = (function() {
    var beers = [];

    var getBeers = function() {
        return beers;
    };

    var hasBeer = function(beer) {
        return beers.includes(beer)
    }

    var addBeer = function(beer) {
        beers.add(beer);
    };

    var removeBeer = function(beer) {
        for (var i = 0; i < beers.length; i++) {
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

export default Favorites;
