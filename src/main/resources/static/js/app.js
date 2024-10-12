// app.js
const App = (function () {
    // Variables privadas
    let selectedAuthor = '';
    let blueprintsList = [];

    // Operación pública para cambiar el autor seleccionado
    const setSelectedAuthor = function (authorName) {
        selectedAuthor = authorName;
        $("#selectedAuthor").text(selectedAuthor+"'s BluePrints");
    };

    // Operación pública para actualizar el listado de planos
    const updateBlueprints = function (authorName) {
        
        apimock.getBlueprintsByAuthor(authorName, function (blueprints) {

            if (!blueprints || blueprints == null) {
                $("#blueprintsTable tbody").empty();
                $("#selectedAuthor").text("No found author selected");
                $("#totalPoints").text("0");
                return; // Salir de la función si no se encuentran planos
            }

            const transformedBlueprints = blueprints.map(bp => ({
                name: bp.name,
                points: bp.points
            }));

            blueprintsList = transformedBlueprints;
            $("#blueprintsTable tbody").empty();


            transformedBlueprints.forEach(bp => {

                $("#blueprintsTable tbody").append(
                    `<tr><td>${bp.name}</td><td>${bp.points.length}</td></tr>`
                );
            });

            const totalPoints = transformedBlueprints.reduce((sum, bp) => sum + bp.points.length, 0);
            $("#totalPoints").text(totalPoints);
        });
    };

    // Retorna las operaciones públicas
    return {
        setSelectedAuthor,
        updateBlueprints
    };
})();

// Uso del módulo y evento del botón
$(document).ready(function () {
    $("#queryButton").on("click", function () {
        document.getElementById("selectedAuthor").style.display=""
        const authorName = $("#authorName").val(); // Obtiene el nombre del autor del input
        document.getElementById("selectedAuthor").style.display="block"
        App.setSelectedAuthor(authorName); // Establece el autor seleccionado
        App.updateBlueprints(authorName); // Actualiza los planos para el autor
    });
});
