var index = 0;

showImage(index);

function showImage(i){
    index += i;

    console.log(i);

    var images = document.getElementsByClassName("carousel-image");
    var dots = document.getElementsByClassName("dot");

    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
        console.log(images[i]);
    }

    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
        console.log(dots[i]);
    }

    if(index > images.length-1)
    {
        index = 0;
    }else if (index < 0)
    {
        index = images.length - 1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}