const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
  });

app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
  
    console.log(firstName, lastName, email);
  });  

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);

const url = "https://us4.api.mailchimp.com/3.0/lists/4bcf3cbb34";

const options = {
  method: "POST",
  auth: "mostakin1:fd8d2a94f77b14c7c113e1d4a29c6120-us4"
};

const request = https.request(url, options, function(response) {
  response.on("data", function(data) {
    console.log(JSON.parse(data));
  });
});

request.write(jsonData);
request.end();


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});


// f641e911b3bea24d647f8a32674a9ad7-us8
