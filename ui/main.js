var button=document.getElementById('cl');
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4)
        {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('clicked');
                span.innerHTML = counter.toString();
            }
        }
    };
    resuest.open('GET','http://ganakivi.imad.hasura-app.io/counter',true);
    request.send();
};
var smt=document.getElementById('smt');
var list='';
smt.onclick = function(){
    var val=document.getElementById('name');
    var name=val.value;
          list+='<li>'+name;
  var lis=document.getElementById('list');
  lis.innerHTML=list;
};
var clearing=document.getElementById('clr');
clearing.onclick =function(){
    list='';
  var lis=document.getElementById('list');
  lis.innerHTML=list;
};
var img = document.getElementById('image');
var marginval= 0;
var increment=1;
function moveleft(){
    marginval+=increment;
    if(marginval>400)
    increment=-1;
    if(marginval<-400)
    increment=1;
 img.style.marginLeft = marginval+ 'px';
}
img.onclick = function (){
    var interval = setInterval(moveleft, 30);
};