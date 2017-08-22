console.log('Loaded!');
alert('Hi, It is Viki');
var element = document.getElementById('text');
element.innerHTML = 'this is the new Text';
var img = document.getElementById('image');
var marginval= 0;
function moveleft(){
    marginval++;
 img.style.marginLeft = marginval+ 'px';
}
img.onclick = function (){
    var interval = setInterval(moveleft, 30);
};