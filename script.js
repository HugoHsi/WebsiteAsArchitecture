var scrollPos = 0;

let sliceImages = document.querySelectorAll(".slice-img");
current = 0;

// clear images
function reset(){
    for(let i = 0; i < sliceImages.length; i++){
        sliceImages[i].style.opacity = '0';
    }
}

// init slider
function startSlide(){
    reset()
    sliceImages[0].style.opacity = '1';
}

// show prev
function prevLayer(){
    reset();
    sliceImages[current - 1].style.opacity = '1';
    current--;
}

// show next
function nextLayer(){
    reset();
    sliceImages[current + 1].style.opacity = '1';
    current++;
}


startSlide();

window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  console.log('scrolling up');
  prevLayer();
 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');
  nextLayer();
 }
});

function tetrahedronHoverMain() { 
    window.open("./subpages/tetrahedron.html","_self"); 
}

function cubeHoverMain() { 
    window.open("./subpages/cube.html","_self"); 
}

function octahedronHoverMain() { 
    window.open("./subpages/octahedron.html","_self"); 
}

function dodecahedronHoverMain() { 
    window.open("./subpages/dodecahedron.html","_self"); 
}

function icosahedronHoverMain() { 
    window.open("./subpages/icosahedron.html","_self"); 
}



function tetrahedronHover() { 
    window.open("./tetrahedron.html","_self"); 
}

function cubeHover() { 
    window.open("./cube.html","_self"); 
}

function octahedronHover() { 
    window.open("./octahedron.html","_self"); 
}

function dodecahedronHover() { 
    window.open("./dodecahedron.html","_self"); 
}

function icosahedronHover() { 
    window.open("./icosahedron.html","_self"); 
}

