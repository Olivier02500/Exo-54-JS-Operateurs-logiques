

let x ;
x = 1 ;

let y ;
y = 4 ;

let z ;
z = -1 ;

if  ( x < 2 &&  y > 3 && z <= 0 ) {
 let para4 = document.getElementById('para4');
 para4.innerText = "x est plus petit que 2 ET y est plus grand que 3 ET z est plus petit ou égale que 0"
}


if ( ( x < 2  && y > 3 ) || z === -1 ) {
 let para5 = document.getElementById('para5');
 para5.innerText = "x est plus petit que 2 ET y est plus grand que 3 OU z est stricement égale a -1"
}

 if ( x < 2 ) {
  let para1 = document.getElementById('para1');
  para1.innerText = "x est plus petit que 2"
 }


if ( y > 3 ) {
 let para3 = document.getElementById('para2');
 para3.innerText = "y est plus grand que 3"
}

if ( z <= 0 ) {
 let para4 = document.getElementById('para3');
 para4.innerText = "z est plus petit ou égale que 0"
}



