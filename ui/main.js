console.log('Loaded!');
alert('Hi, It is Viki');
var element = document.getElementById('text');
element.innerHTML = 'this is the new Text';
var img = document.getElementById('image');
var marginval= 0;
var increment=1;
function moveleft(){
    marginval+=increment;
    if(marginval>400)
    increament=-1;
    if(marginval<-400)
    increament=1;
 img.style.marginLeft = marginval+ 'px';
}
img.onclick = function (){
    var interval = setInterval(moveleft, 30);
};