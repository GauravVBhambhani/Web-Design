var express = require("express");
var bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignmenteight');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (_callback) {
    console.log("connection succeeded");
})
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// create user api
app.post('/user/create', async (req, res) => {
    console.log("Calling Create API...")
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;

    let nameRegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegExp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

    if (!name.match(nameRegExp)) return res.send("Invalid Name!");
    if (!email.match(emailRegExp)) return res.send("Invalid Email Address!");
    if (!pass.match(passwordRegExp)) return res.send("Please create a Strong Password!");

    try {
        const salt = await bcrypt.genSalt(10);
        var passHash = await bcrypt.hash(pass, salt);
    }

    catch (e) {
        res.status(500).send(e.toString());
    }

    var data = {
        "name": name,
        "email": email,
        "password": passHash
    }
    db.collection('details').insertOne(data, function (err) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    return res.send("User Added in Database!")
});

// edit user api
app.put("/user/edit", async (req, res) => {
    console.log("Calling Edit API...");

    var femail = req.body.email;
    var newName = req.body.name;
    var newPassword = req.body.password;

    let nameRegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let passwordRegExp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

    if (!newName.match(nameRegExp)) return res.send("Invalid Name!");
    if (!newPassword.match(passwordRegExp)) return res.send("Please create a Strong Password!");

    // db.collection('details').findOne(femail, async (err) => {
    //     if (err) return res.send("User does not exist!")


    // const userEmail = { emailAddress: email }

    const foundUser = await db.collection('details').findOne({ email: femail });

    console.log(foundUser)

    if (foundUser != null) {
        // console.log("Inside if")
        const salt = await bcrypt.genSalt(10);
        var passHash = await bcrypt.hash(newPassword, salt);
        const options = { upsert: true };

        const filter = { email: femail }
        const updateDoc = {
            $set: {
                name: newName, password: passHash
            }
        }

        db.collection('details').updateOne(filter, updateDoc, options, function (err) {
            if (err) throw err;
            console.log("Edited details successfully");
        });     
        return res.send("Details Edited!");
    }
    else { 
        // console.log("inside else")
        res.send("email does not exist") }
});




// delete user api
app.delete('/user/delete', function (req, res) {
    console.log("Calling Delete API...")
    var email = req.body.email;

    var data = {
        "email": email
    }

    db.collection('details').deleteOne(data, function (err) {
        if (err) throw err;
        console.log("Record Deleted Successfully")
    });
    return res.send("User Deleted");
});





// get all users api
app.get('/user/getAll', function (req, res) {
    console.log("Calling GetAll API...")
    db.collection('details').find({}).toArray(function (err, collections) {
        if (err) throw err;
        console.log("Displaying all users");
        return res.send(collections)
    });
})

// end of APIs

app.get('/', function (_req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    //    return res("record entered");
}).listen(3000)

console.log("server listening at port 3000");
