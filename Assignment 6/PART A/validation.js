var valid = 0;

function validate_uname() {
    var uname_val = $("#uname").val();
    if (uname_val == "") {
        $("#uname").css({ "border": "1px solid red" });
        $("#uname_error").text("Username cannot be empty!");
        $("#uname_error").css({ "margin-top": "5px" });
        // $("#uname").val("");
        valid = 0;
    }
    else if (/^[a-zA-Z0-9- ]*$/.test(uname_val) == false) {
        $("#uname").css({ "border": "1px solid red" });
        $("#uname_error").text("Username cannot contain special characters!");
        $("#uname_error").css({ "margin-top": "5px" });
        // $("#uname").val("");
        valid = 0;
    }
    else if (uname_val.length < 5) {
        $("#uname").css({ "border": "1px solid red" });
        $("#uname_error").text("Username should have more than 5 characters!");
        $("#uname_error").css({ "margin-top": "5px" });
        // $("#uname").val("");
        valid = 0;
    }
    else {
        $("#uname").css({ "border": "1px solid grey" });
        $("#uname_error").text("");
        $("#uname_error").css({ "margin-top": "0px" });
        valid++;
    }
}

function validate_email() {
    var email_val = $("#email").val();
    if (email_val == "") {
        $("#email").css({ "border": "1px solid red" });
        $("#email_error").text("Email cannot be empty!");
        $("#email_error").css({ "margin-top": "5px" });
        // $("#email").val("");
        valid = 0;
    }
    else if (/^(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)$/.test(email_val) == false) {
        $("#email").css({ "border": "1px solid red" });
        $("#email_error").text("Email must be a valid Northeastern Id!");
        $("#email_error").css({ "margin-top": "5px" });
        // $("#email").val("");
        valid = 0;
    }
    else {
        $("#email").css({ "border": "1px solid grey" });
        $("#email_error").text("");
        $("#email_error").css({ "margin-top": "0px" });
        valid++;
    }
}

function validate_pass() {
    var pass_val = $("#pass").val();
    if (pass_val == "") {
        $("#pass").css({ "border": "1px solid red" });
        $("#pass_error").text("Password cannot be empty!");
        $("#pass_error").css({ "margin-top": "5px" });
        $("#pass").val("");
        valid = 0;
    }
    else if (/^[a-zA-Z0-9- ]*$/.test(pass_val) == true) {
        $("#pass").css({ "border": "1px solid red" });
        $("#pass_error").text("Password must contain at least 1 special character(s)!");
        $("#pass_error").css({ "margin-top": "5px" });
        $("#pass").val("");
        valid = 0;
    }
    else if (pass_val.length < 5) {
        $("#pass").css({ "border": "1px solid red" });
        $("#pass_error").text("Password should have more than 5 characters!");
        $("#pass_error").css({ "margin-top": "5px" });
        $("#pass").val("");
        valid = 0;
    }
    else {
        $("#pass").css({ "border": "1px solid grey" });
        $("#pass_error").text("");
        $("#pass_error").css({ "margin-top": "0px" });
        valid++;
    }
}

function validate() {
    if (valid == 3) {
        return true;
    }
    else {
        valid = 0;
        alert("Invalid Entry!");
        return false;
    }
}