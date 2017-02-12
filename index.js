// // CREATING ELEMENTS
// //===================================

let header = document.createElement('header')
let pixelSection = document.createElement('section');
let body = document.getElementsByTagName('body')[0];
let paletteSection = document.createElement('paletteSection');

// APPENDING
//===================================
body.appendChild(pixelSection)
body.appendChild(paletteSection)

// SETTING CLASSES
//===================================

pixelSection.classList.add('pixelSection');
paletteSection.classList.add('paletteSection');

// CREATING DIVS
//===================================

for (var i = 0; i < 2000; i++) {
    let pixel = document.createElement('div')
    pixelSection.append(pixel);
    pixel.className = 'pixel';
}

for (var i = 0; i < 100; i++) {

    let colors = document.createElement('div');
    paletteSection.appendChild(colors);
    colors.className = 'colors';
    // colors.id='colors'+i
    let randomColor = 'rgb(' + (Math.floor(Math.random()*256)) + ', ' +  (Math.floor(Math.random()*256)) + ', ' + (Math.floor(Math.random()*256)) + ')';
    colors.style.backgroundColor = randomColor
}

// CREATING COLORS
//===================================
var colorPlaceholder = ''

paletteSection.addEventListener('click', function(event){
  colorPlaceholder =  event.target.style.backgroundColor;
pixelSection.addEventListener('click', function(event) {
  event.target.style.backgroundColor = colorPlaceholder;
});
});
