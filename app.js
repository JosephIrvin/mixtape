// // slideshow js
// // x = counter
// var x = 0;
// var slide = [];
// //one thousanths of a second
// var time = 3000;

// // images - https://www.gamerevolution.com/features/338645-15-beautiful-ffxiv-stormblood-screenshots-taken-improved-group-pose-camera
// slide[0] = "images/aiko1.png";
// slide[1] = "images/billie1.png";
// slide[2] = "images/tyler1.png";
// slide[3] = "images/joji1.png";
// slide[4] = "images/peep1.png"



// // change slide function

// // declare function
// var changeSlide = () => {
// // call the name of the image then the source
// // and change it to whichever position in the array
// // as the function runs
//     document.artistSlideshow.src = slide[x];
// // if x is less than the length of the array then go up by 1
//     if(x < slide.length - 1){
//         x++;
//     }
// // otherwise reset to 0, meaning it will restart once
// // there are no more pictures and x grows bigger than
// // how many there are
//     else{
//         x = 0;
//     }
// // controls timing for the slideshow
// // setTimeout makes the funcion happen after the amount of time passes
// // this is not a loop so this is necessary to make it continue running
// // the function would end if clearTimeout was applied
//     setTimeout("changeSlide()", time);
// }; 

// // make function run when the page loads
// window.onload = changeSlide;

// slideshow js
// x = counter
var x = 0;
var slide = [];
//one thousanths of a second
var time = 3000;

// images - https://www.gamerevolution.com/features/338645-15-beautiful-ffxiv-stormblood-screenshots-taken-improved-group-pose-camera
slide[0] = "/images/yeet.png";
slide[1] = "/images/yeet2.png";
slide[2] = "/images/yeet3.png";


// change slide function

// declare function
var changeSlide = () => {
// call the name of the image then the source
// and change it to whichever position in the array
// as the function runs
    document.theimage.src = slide[x];
// if x is less than the length of the array then go up by 1
    if(x < slide.length - 1){
        x++;
    }
// otherwise reset to 0, meaning it will restart once
// there are no more pictures and x grows bigger than
// how many there are
    else{
        x = 0;
    }
// controls timing for the slideshow
// setTimeout makes the funcion happen after the amount of time passes
// this is not a loop so this is necessary to make it continue running
// the function would end if clearTimeout was applied
    setTimeout("changeSlide()", time);
}; 

// make function run when the page loads
window.onload = changeSlide;