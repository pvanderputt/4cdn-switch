var FH_replaceImageThumbs = document.getElementsByClassName("fileThumb");
var FH_replaceImageText = document.getElementsByClassName("fileText");

setInterval(function(){ fuck_hiro(); }, 3000);
function fuck_hiro() {  
    little_boy();
    fat_man();
}

//Replaces the slow links in the thumbnail
function little_boy() {//https://en.wikipedia.org/wiki/Hiroshima
    var FH_thumbIterator = 0;
    for(; FH_thumbIterator < FH_replaceImageThumbs.length; FH_thumbIterator++){
        if(FH_replaceImageThumbs[FH_thumbIterator].href){
            FH_replaceImageThumbs[FH_thumbIterator].href = FH_replaceImageThumbs[FH_thumbIterator].href.replace(/is.4chan/, "i.4cdn");
            FH_replaceImageThumbs[FH_thumbIterator].href = FH_replaceImageThumbs[FH_thumbIterator].href.replace(/is2.4chan/, "i.4cdn");
        }
    }
}
//Replaces the slow links the filename text
function fat_man() {//https://en.wikipedia.org/wiki/Nagasaki
    var FH_textIterator = 0;
    for(; FH_textIterator < FH_replaceImageText.length; FH_textIterator++){
        if(FH_replaceImageText[FH_textIterator].getElementsByTagName('a')[0].href){
            var imageText = FH_replaceImageText[FH_textIterator].getElementsByTagName('a')[0].href.replace(/is.4chan/, "i.4cdn");
            var imageText = FH_replaceImageText[FH_textIterator].getElementsByTagName('a')[0].href.replace(/is2.4chan/, "i.4cdn");
            FH_replaceImageText[FH_textIterator].getElementsByTagName('a')[0].setAttribute('href', imageText);
        }
    }
}
console.log(FH_thumbIterator + " pieces of thumbnail bullshit replaced.");
console.log(FH_textIterator + " pieces of filename bullshit replaced.");
