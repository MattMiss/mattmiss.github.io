window.addEventListener("load", loadPage);

function loadPage(){
    document.getElementsByClassName("more-info")[0].addEventListener("click", function(){
        window.location.assign("/game-crafting.html");
    })
    document.getElementsByClassName("more-info")[1].addEventListener("click", function(){
        window.location.assign("/game-littledude.html");
    })
    document.getElementsByClassName("more-info")[2].addEventListener("click", function(){
        window.location.assign("/game-blaster.html");
    })
    document.getElementsByClassName("more-info")[3].addEventListener("click", function(){
        window.location.assign("/game-cosmorca.html");
    })
    document.getElementsByClassName("more-info")[4].addEventListener("click", function(){
        window.location.assign("/game-darksoulsclone.html");
    })
}