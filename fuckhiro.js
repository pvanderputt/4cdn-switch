var FH_replaceImageThumbs = document.getElementsByClassName("fileThumb");
var FH_replaceImageText = document.getElementsByClassName("fileText");
//Replaces links from the thumbnail
var FH_thumbIterator = 0;
for(; FH_thumbIterator < FH_replaceImageThumbs.length; FH_thumbIterator++){
    if(FH_replaceImageThumbs[FH_thumbIterator].href){
        FH_replaceImageThumbs[FH_thumbIterator].href = FH_replaceImageThumbs[FH_thumbIterator].href.replace(/is.4chan/, "i.4cdn");
    }
}
//Replaces links from the filename text
var FH_textIterator = 0;
for(; FH_textIterator < FH_replaceImageText.length; FH_textIterator++){
    if(FH_replaceImageText[FH_textIterator].href){
        FH_replaceImageText[FH_textIterator].href = FH_replaceImageText[FH_textIterator].href.replace(/is.4chan/, "i.4cdn");
    }
}


console.log(FH_thumbIterator + " pieces of thumbnail bullshit replaced.");
console.log(FH_textIterator + " pieces of filename bullshit replaced.");
