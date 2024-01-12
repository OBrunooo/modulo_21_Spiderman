$(document).ready(function () {
    $("#button--atravesdoaranhaverso").click(function(){
        $(this).addClass("filmes__tabs__button--is--active");
        $("#button--noaranhaverso").removeClass("filmes__tabs__button--is--active");
        $("#sinopse--noarahaverso").slideUp("slow", function() {
            $("#sinopse--noarahaverso").removeClass("filmes__sinopse--is--active");
            $("#sinopse--atravesdoaranhaverso").slideDown("slow");
        });
    });
});
