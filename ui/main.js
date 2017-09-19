var button=document.getElementById('cl');
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('clicked');
                span.innerHTML = counter.toString();
            }
        }
    };
    resuest.open('GET','http://ganakivi.imad.hasura-app.io/counter',true);
    request.send(null);
};
var val=document.getElementById('name');
var smt=document.getElementById('smt');
smt.onclick = function(){
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++)
  {
      list+='<li>'+names[i];
  }
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