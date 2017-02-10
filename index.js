
// CREATING ELEMENTS
//===================================


let pixelSection = document.createElement('section');
let body = document.getElementsByTagName('body')[0];
let paletteAside = document.createElement('aside');

let palette = document.createElement('div');



// APPENDING
//===================================
body.append(pixelSection)
body.append(paletteAside)
paletteAside.append(palette)


// SETTING CLASSES
//===================================

pixelSection.classList.add('pixelSection');
paletteAside.classList.add('paletteAside');

// CREATING DIVS
//===================================
for (var i = 0; i < 500; i++) {
  let div = document.createElement('div');
  pixelSection.append(div);
  div.classList.add('pixels')
  // pixels.style.boxSizing = 'borderBox';
  div.style.width = '0.8em';
  div.style.height = '0.8em';
  div.style.display = 'block'
  div.style.border = '1px solid black';
  div.style.float = 'left'
  div.style.borderCollapse = 'collapse';
}

//            STYLES
//===================================
//pixel section styling
//===================================
pixelSection.style.width  = '80%';
pixelSection.style.height = '400px'
pixelSection.style.display = 'block';
pixelSection.style.float = 'left';


//===================================
//palette aside styling
//===================================
paletteAside.style.width = '200px'


//===================================
//palette div styling
//===================================
palette.style.borderRadius = '20px'
// palette.style.border = '1px solid black'
