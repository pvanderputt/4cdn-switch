var images = document.getElementsByClassName("fileThumb");
var i = 0;
for(; i < images.length; i++){
    images[i].href = images[i].href.replace(/is.4chan/, "i.4cdn");
}
console.log(i + " pieces of bullshit replaced.");