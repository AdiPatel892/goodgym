const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
var cons = require('consolidate');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adi', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")});





  const ContactSchema = new mongoose.Schema({
    Name: String,Country: String, Subject: String
  });
const Contact = mongoose.model('Contact', ContactSchema);

const RegisterSchema = new mongoose.Schema({
  Name: String,Gender: String, Country: String, State: String, City: String, Email: String, Subject: String
});
const Register = mongoose.model('Register', RegisterSchema);
// EXPRESS SPECIFIC STUFF  node .\node.js
app.use('/static', express.static('static')) 
app.use('/images', express.static('images'))// For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// ENDPOINTS node .\node.js
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.html', params);
})

app.post('/', (req, res)=>{
  fname = req.body.fname
  lname = req.body.lname
  country = req.body.Country
  subject = req.body.subject
  
const New_Contact = new Contact({ Name: 
fname + " "+lname, Country : country, Subject: subject });
New_Contact.save(function (err, k) {
  if (err) return console.error(err);
  // k.speak();
});
  let outputToWrite = `${New_Contact} `
  // fs.writeFileSync('output.txt', outputToWrite)/
  const params = {'message': 'Your form has been submitted successfully'}
  res.status(200).render('Form_Submission.html', params);

})


app.get('/register', (req, res)=>{
  const con = "This is the best content on the internet so far so use it wisely"
  const params = {'title': 'PubG is the best game', "content": con}
  res.status(200).render('register.html', params);
})

app.post('/register', (req, res)=>{
    fname = req.body.fname
    lname = req.body.lname
  gender = req.body.gender
    country = req.body.Country
    state = req.body.state
    city = req.body.city
    email = req.body.email
    subject = req.body.subject
    
    console.log(gender)
const New_Register = new Register({ Name: 
fname + " "+lname, Gender : gender, Country : country, State : state, City : city, Email : email, Subject: subject });
New_Register.save(function (err, k) {
    if (err) return console.error(err);
    // k.speak();/
  });
    let outputToWrite = `${New_Register} `
    // fs.writeFileSync('output.txt', outputToWrite)/
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('Form_Submission.html', params);

})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
