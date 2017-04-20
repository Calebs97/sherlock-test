var express = require('express');
var app = express();
var Kairos_APP_ID = process.env.Kairos_APP_ID;
var Kairos_SECRET = process.env.Kairos_SECRET;
console.log(Kairos_APP_ID);
console.log("hiii");

app.get('/Kairos_APP_ID', function (req, res) {
  response.send(Kairos_APP_ID);
})
app.get('/Kairos_SECRET', function (req, res) {
  response.send(Kairos_SECRET);
})

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
  res.json('index.html');
  //It will find and locate index.html from public
});




app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
