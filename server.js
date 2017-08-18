var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title :'article one | viki',
    heading : 'ARTICLE ONE',
    content : `            <H3>i tried to add some articles</H3>
            <br>
            <hr>
            <div><p>
            it is the best thing with a little improvement in my experience. there is nothing wrong in trying this. i normally won't get angry.
            But in fact there is no situations that i faced made me angry that is the truth. i have not faced any difficult situations.
            <H3>i tried to add some articles in article three</H3>
            <br>
            <hr>
            <div><p>
            it is the best thing with a little improvement in my experience. there is nothing wrong in trying this. i normally won't get angry.
            But in fact there is no situations that i faced made me angry that is the truth. i have not faced any difficult situations.
            but if some situations lead to angry there is a feel always come that this is not the correct situation. and a lecture begins in my
            mind. this help in solving </p>
            </div>
            <div>`          it is the best thing with a little improvement in my experience. there is nothing wrong in trying this. i normally won't get angry.
            But in fact there is no situations that i faced made me angry that is the truth. i have not faced any difficult situations.
            but if some situations lead to angry there is a feel always come that this is not the correct situation. and a lecture begins in my
            mind. this help in solving</p> 
            </div>`
};
var articleTwo= {
    title : 'article-two | viki',
    heading : 'ARTICLE TWO',
    content : ` <H3>i tried to add some articles in article two</H3>
            <br>
            <hr>
            <div><p>
            it is the best thing with a little improvement in my experience. there is nothing wrong in trying this. i normally won't get angry.
            But in fact there is no situations that i faced made me angry that is the truth. i have not faced any difficult situations.
            but if some situations lead to angry there is a feel always come that this is not the correct situation. and a lecture begins in my
            mind. this help in solving </p>
            </div>`
};
var articleThree = {
    title : 'article three | viki',
    heading : 'ARTICLE THREE',
    content : `          <H3>i tried to add some articles in article three</H3>
            <br>
            <hr>
            <div><p>
            it is the best thing with a little improvement in my experience. there is nothing wrong in trying this. i normally won't get angry.
            But in fact there is no situations that i faced made me angry that is the truth. i have not faced any difficult situations.
            but if some situations lead to angry there is a feel always come that this is not the correct situation. and a lecture begins in my
            mind. this help in solving </p>
            </div>`
};
function create(data){
var template=    `<!doctype html>
<html>
    <head>
        <title>
            ${data.title}
        </title>
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <A href="/">home</A>
            </div>
            <div>
                <h1><center>${data.heading}</center></h1>
            </div>
            ${data.content}
        </div>
    </body>
</html>`
return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req,res) {
  res.send(create(articleOne));
});
app.get('/article-two', function (req,res){
  res.send(create(articleTwo));
});
app.get('/article-three', function (req,res){
  res.send(create(articleThree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
