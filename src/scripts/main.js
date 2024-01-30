$(document).ready(function () {
    function exibirElemento(botaoID, elementoID) {
        if ($(elementoID).is(":visible")) {
            return; 
        }

        $(botaoID).addClass("filmes__tabs__button--is--active");

        $(".filmes__tabs__button").not(botaoID).removeClass("filmes__tabs__button--is--active");

        $(".filmes__sinopse").not(elementoID).slideUp("slow", function(){
            $(this).removeClass("filmes__sinopse--is--active");
            
            $(elementoID)
                .css({display: "none", opacity: 0})
                .delay(100)
                .slideDown("slow", function() {
                    $(this)
                        .css({display: "flex"})
                        .animate({ opacity: 1 }, "slow")
                        .addClass("filmes__sinopse--is--active")
                        .find(".filmes__sinopse__item__video, p")
                        .fadeIn("slow");
                });
        });
    }

    $("#button--atravesdoaranhaverso").click(function(){
        exibirElemento(this, "#sinopse--atravesdoaranhaverso");
    });

    $("#button--noaranhaverso").click(function(){
        exibirElemento(this, "#sinopse--noarahaverso");
    });

    $(".header__links__item").click(function(event) {
        event.preventDefault();
    
        var targetSection = $($(this).attr("href")); 
        var offsetTop = targetSection.offset().top - 50; 
    
        $("html, body").animate({
            scrollTop: offsetTop
        }, 800);
    });
    
});
