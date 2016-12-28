var FH_replaceImages = document.getElementsByClassName("fileThumb");
var FH_iterator = 0;
for(; FH_iterator < FH_replaceImages.length; FH_iterator++){
    if(FH_replaceImages[FH_iterator].href){
        FH_replaceImages[FH_iterator].href = FH_replaceImages[FH_iterator].href.replace(/is.4chan/, "i.4cdn");
    }
}
console.log(FH_iterator + " pieces of bullshit replaced.");