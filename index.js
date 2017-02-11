// // CREATING ELEMENTS
// //===================================

let header = document.createElement('header')
let pixelSection = document.createElement('section');
let body = document.getElementsByTagName('body')[0];
let paletteSection = document.createElement('paletteSection');
// let palette = document.createElement('div');
// let header  = document.createElement('header');



// APPENDING
//===================================
// body.appendChild(header)
body.appendChild(pixelSection)
body.appendChild(paletteSection)
// paletteSection.appendChild(palette)



// SETTING CLASSES
//===================================

pixelSection.classList.add('pixelSection');
paletteSection.classList.add('paletteSection');

// CREATING DIVS
//===================================

for (var i = 0; i < 2000; i++) {
    let div = document.createElement('div')
    pixelSection.append(div);
    div.className = 'pixel'
}

// created a div element, appended it to the pixelSection, set a class name to pixel

//find a way to sort by colors

for (var i = 0; i < 50; i++) {

    let colors = document.createElement('div');
    paletteSection.appendChild(colors);
    colors.className = 'colors';
    colors.id='colors'+i
    let randomColor = 'rgb(' + (Math.floor(Math.random()*256)) + ', ' +  (Math.floor(Math.random()*256)) + ', ' + (Math.floor(Math.random()*256)) + ')';
    colors.style.backgroundColor = randomColor
}


// CREATING COLORS
//===================================
var colorPlaceholder = ''

paletteSection.addEventListener('click', function(event){
  // console.log('Event target', event.target);
  colorPlaceholder =  event.target.style.backgroundColor
console.log(style);
});

pixelSection.addEventListener('click', function(event){
  pixelSection.setAttribute('style.backgrou;
})










// for (var i = 0; i < 11; i++) {
//   let div = document.createElement('div')
//   div.id = 'myroylgavpbw'[i]
//   palette.appendChild(div)
// }



//   let div = document.createElement('div');
//   pixelSection.append(div);
//   div.classList.add('pixels')
//   // pixels.style.boxSizing = 'borderBox';
//   div.style.width = '0.8em';
//   div.style.height = '0.8em';
//   div.style.padding = 'auto'
//   div.style.display = 'block'
//   div.style.border = '1px solid black';
//   div.style.float = 'left'
//   div.style.borderCollapse = 'collapse';
// }
//
// //            STYLES
// //===================================
// //pixel section styling
// //===================================
// pixelSection.style.width  = '80%';
// pixelSection.style.display = 'block';
// pixelSection.style.float = 'left';
//
//
// //===================================
// //palette aside styling
// //===================================
// paletteSection.style.width = '200px'
//
//
// //===================================
// //palette div styling
// //===================================
// palette.style.borderRadius = '20px'
// // palette.style.border = '1px solid black'
