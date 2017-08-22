console.log('Loaded!');
alert('Hi, It is Viki');
var element = document.getElementById('text');
element.innerHTML = 'this is the new Text';
var img = document.getElementById('image');
img.onclick = function (){
    img.style.marginLeft = '130px' ;
};