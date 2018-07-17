var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');
var app = express();

//HANDLE BARS
app.set('views ',path.join(__dirname, 'views') );
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use('/images',express.static(__dirname + '/images')); //This is to display images from the public/images folder.
app.use('/stylesheets',express.static(__dirname + '/style.css')); //This is to have one file only for css styles.
app.use('/js',express.static(__dirname + '/js')); //This is for js files
app.use('/fonts',express.static(__dirname + '/fonts')); //This is for js files

//Routes
app.get('/', function(req,res){
  res.render('home');
});

//Salvadora
app.get('/member/2', function(req,res){
  res.render('nofuente',{ //home is the views homehandlebars
    profilename1:'THIS IS NOFUENTE PROFILE',
    published1: true
  });
});

//Nofuente
app.get('/member/1', function(req,res){
  res.render('salvadora',{ //home is the views homehandlebars
    profilename2:'THIS IS SALVADORA PROFILE',
    published2: true
  });
});


/*
app.get('/member/1', function(req,res){
  res.send("This is a server response on nofuente");
});

app.get('/member/2', function(req,res){
  res.send("This is a server response on salvadora");
}); */

/*
app.listen(8000, function(){
  console.log("Server started on port 8000");
}); */

app.listen(process.env.PORT || 8000);
