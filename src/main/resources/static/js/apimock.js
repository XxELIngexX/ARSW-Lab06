//@author hcadavid

apimock = (function () {

    var mockdata = [];

    mockdata["johnconnor"] = [
        { author: "johnconnor", "points": [{ "x": 150, "y": 120 }, { "x": 215, "y": 115 }], "name": "house" },
        { author: "johnconnor", "points": [{ "x": 340, "y": 240 }, { "x": 15, "y": 215 }], "name": "gear" }
    ];
    mockdata["maryweyland"] = [
        { author: "maryweyland", "points": [{ "x": 140, "y": 140 }, { "x": 115, "y": 115 }], "name": "house2" },
        { author: "maryweyland", "points": [{ "x": 140, "y": 140 }, { "x": 115, "y": 115 }], "name": "gear2" }
    ];

    // Nuevos autores y planos
    mockdata["shapes"] = [
        {
            author: "shapes", "points": [
                { "x": 100, "y": 100 },
                { "x": 200, "y": 100 },
                { "x": 150, "y": 200 },
                { "x": 100, "y": 100 }
            ], "name": "triangle"
        },
        {
            author: "shapes", "points": [
                { "x": 100, "y": 100 },
                { "x": 200, "y": 100 },
                { "x": 200, "y": 200 },
                { "x": 100, "y": 200 },
                { "x": 100, "y": 100 }
            ], "name": "square"
        },
		{
            author: "shapes", "points": [
                { "x": 100, "y": 80 },
                { "x": 200, "y": 80 },
                { "x": 220, "y": 160 },
                { "x": 150, "y": 200 },
				{ "x": 80, "y": 160 },
				{ "x": 100, "y": 80 },
            ], "name": "pentagon"
        }
    ];

    mockdata["figures"] = [
        {
            author: "figures", "points": [
                { "x": 100, "y": 50 },
                { "x": 150, "y": 200 },
                { "x": 200, "y": 50 },
                { "x": 70, "y": 140 },
                { "x": 220, "y": 140 },
				{ "x": 100, "y": 50 },
            ], "name": "star"
        },
        {
            author: "figures", "points": [
                { "x": 100, "y": 50 },
                { "x": 200, "y": 50 },
                { "x": 200, "y": 150 },
                { "x": 150, "y": 200 },
                { "x": 100, "y": 150 },
                { "x": 100, "y": 50 },
				{ "x": 200, "y": 150 },
                { "x": 100, "y": 150 },
                { "x": 200, "y": 50 }
				
            ], "name": "house"
        }
    ];

    return {
        getBlueprintsByAuthor: function (authname, callback) {
            if (mockdata.hasOwnProperty(authname)) {
				// Si el autor existe, llama al callback con sus datos
				callback(mockdata[authname]);
			} else {
				// Si el autor no existe, llama al callback con un valor nulo o un arreglo vacío
				callback(null); // o callback([]);
			}
        },

        getBlueprintsByNameAndAuthor: function (authname, bpname, callback) {
            callback(
                mockdata[authname].find(function (e) { return e.name === bpname })
            );
        }
    }

})();

/*
Example of use:
var fun = function (list) {
    console.info(list);
}

apimock.getBlueprintsByAuthor("johnconnor", fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor", "house", fun);
*/