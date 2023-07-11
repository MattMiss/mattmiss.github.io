
document.addEventListener('DOMContentLoaded', function() {
    loadNav();
}, false);

function loadNav(){
    $.get("nav.html", function(data){
        $("#nav-placeholder").replaceWith(data);
    });
}