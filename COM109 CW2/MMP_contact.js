// This jquery function will move Darren Mukiele 240px to the right
//  he will get bigger ater every button press, to make it look like he gets stronger
// after training with McKinless Max Performance
$(document).ready(function(){
    $(".run").click(function(){
        console.log("test")
        $(".runningman").animate({
            left: '+=240px',
            height: '+=15px',
            width: '+=24px',
        });
    });
});

// phone regex
function ValidatePhone(input_str) {
    var re = /^[A-Za-z]+$/;
    return re.test(input_str)
}

// email regex
function ValidateEmail(input_str){
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(input_str)
}

// name regex
function ValidateName(input_str){
    var re = /^[A-Za-z]+$/;
    return re.test(input_str)
}

// password regex
function ValidatePassword(input_str){
    var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    return re.test(input_str)
}


// this function validates the form
function ValidateSignUp(event){
    var phone = document.getElementById('phone').value;
    if (!ValidatePhone(phone)) {
        document.getElementById('error_phoneno').classList.remove('phone');
        alert("Invalid number, ensure that you enter a valid phone number");
        return false
    } else {
        document.getElementById('error_phoneno').classList.add('phone')
        alert("Valid phone number.")
    }

    var Firstname = document.getElementById('Firstname').value;
    if (!ValidateName(Firstname)) {
        document.getElementById('error_Firstname').classList.remove('Firstname');
        alert("Please enter your valid first name.")
        return false
    } else {
        document.getElementById('error_Firstname').classList.add('Firstname')
        alert("Validated first name.")
    }

    var email = document.getElementById('email').value;
    if (!ValidateEmail(email)) {
        document.getElementById('email_error').classList.remove('email');
        alert("Invalid email address, please enter a legitimate email.")
        return false
    } else {
        document.getElementById('email_error').classList.add('email');
        alert("Email validation complete.")
    }

    var password = document.getElementById('password').value;
    if (!ValidatePassword(password)) {
        document.getElementById('invalid_password').classList.remove('password');
        alert("Invalid password, please entre a vaild, secure password")
        return false
    } else {
        document.getElementById('invalid_password').classList.add('password');
        alert("Password validation complete, make sure to keep it hidded from others!")
    }

    alert("All required details are valid, thanks!")
    event.preventdefault()
    return true;
}

// submits the form details with a pop-up message
function Submit(){
    alert("Contact details Submitted, thanks for signing up to McKinless Max Performance")
}

// resets the form details
function Undo(){
    alert("Form undo")
}

// these functions will display a pop-up after a user clicks the 'In Person' or 'Online' buttons
// each will dispay a little fact at the end
function InPerson() {
    window.alert("Thanks for suggesting your preference of in-person lessons, good for the more personal side of the training.");
        window.alert("Did you know that 91% of Personal Trainers did in-person lessons in 2019, that number has dropped in the following years since the COVID-19 pandemic.");
}

function Online() {
    window.alert("Thanks for your preference of online workouts, we like to know what you prefer to offer the best workout possible!");
        window.alert("Did you know that the online fitness market was worth over £12 billion in 2022, and it's only expected to grow in the future!");
}

// these are certain rules for the form validation, e.g. what fields are required
$(document).ready(function() {
    $('#signupMMP').validate({
        rules: {
            Firstname: {
                required: true,
                maxlength: 20
            },
            phone_number: {
                required: true,
                maxlength: 11,
            },
            email: {
                required: true,
                email: true
            },
            verify_email: {
                required: true,
                email: true,
                equalTo: '#email'
            },
            password: {
                required: true,
                minlength: 6
            },
            verify_password: {
                required: true,
                minlength: 6,
                equalTo: '#password'
            }
        }
    });
});
