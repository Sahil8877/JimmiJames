let login_link = window.document.getElementById("login");
// let signup_link = window.document.getElementById("signup");
// let signup_student_link = window.document.getElementById("student_signup_option_id");
//let signup_vendor_link = window.document.getElementById("vendor_signup_option_id");
let navigation = window.document.getElementById("navbar");
let home_section = window.document.getElementById("home");
// let cancelbtn = window.document.getElementById("cancel_button");
let about_section = window.document.getElementById("container");
let body_section = window.document.getElementById("body_id");
// let signup_link_options = window.document.getElementById("signup_options_id");
let login_form = window.document.getElementById("login_form_id");
let login_inputs = window.document.getElementsByClassName("names");
// let signup_student_form = window.document.getElementById("signup_form_student_id");
//let signup_vendor_form = window.document.getElementById("signup_form_vendor_id");

login_form.style.opacity = 0;
//signup_link_options.style.opacity = 0;
//signup_student_form.style.opacity = 0;
// signup_vendor_form.style.opacity = 0;


login_link.addEventListener("click", function () {

    if (login_form.style.opacity == 100) {
        login_form.style.opacity = 0;
    }

    else {
        
        login_form.style.opacity = 100;
        
        login_form.style.zIndex=2;
        home_section.style.zIndex=-1;
        navigation.style.zIndex=-1;
        body_section.style.overflow="hidden";
        home_section.style.filter="brightness(30%)";
        // about_section.style.filter="brightness(30%)";
        //about_section.style.filter="brightness(30%)";
        // signup_link_options.style.opacity = 0;
        // signup_link_options.style.zIndex=0;
        // signup_student_form.style.opacity = 0;
        // signup_student_form.style.zIndex=0;
        // signup_vendor_form.style.opacity = 0;
        // signup_vendor_form.style.zIndex=0;
    }
})

login_inputs.addEventListener("onfocus",function(){

      login_inputs.style.border=p;

})
// cancelbtn.addEventListener("click",function(){
//     login_form.style.opacity=0;
//     login_form.style.zIndex=-2;
//     navigation.style.opacity=1;
//     navigation.style.zIndex=2;
//     home_section.style.opacity=1;
//     home_section.style.overflow="none";
// })

// signup_student_link.addEventListener("click", function () {
//     signup_student_form.style.opacity = 100;
//     signup_student_form.style.zIndex=1;
//     login_form.style.zIndex=0;
//     signup_link_options.style.opacity = 0;
//     // signup_vendor_form.style.opacity = 0;
//     // signup_vendor_form.style.zIndex=0;
// })

// signup_link.addEventListener("click", function () {
//     if (signup_link_options.style.opacity == 100) {
//         signup_link_options.style.opacity = 0;
//     }

//     else {
//         signup_link_options.style.opacity = 100;
//         signup_link_options.style.zIndex=1;
//         login_form.style.opacity = 0;
//         login_form.style.zIndex=0;
//         signup_student_form.style.opacity = 0;
//         signup_student_form.style.zIndex=0;
//         signup_vendor_form.style.opacity = 0;
//         signup_vendor_form.style.zIndex=0;
//     }
// })



// signup_vendor_link.addEventListener("click", function () {
//     signup_vendor_form.style.opacity = 100;
//     signup_vendor_form.style.zIndex=1;
//     login_form.style.zIndex=0;
//     signup_student_form.style.opacity = 0;
//     signup_student_form.style.zIndex=0;
//     signup_link_options.style.opacity = 0;

// })
