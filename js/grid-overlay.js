
$(function () {
    function createGrid() {
        $("body").append('<div class="grid-overlay"></div>');
        var g = $(".grid-overlay");
        for (var i = 0; i < 5; i++) {
            g.append('<div class="vert"></div>')
        }
    }
    createGrid();

})