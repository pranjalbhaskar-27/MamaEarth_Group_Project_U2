
let loginpage = document.querySelector(".login-page")
document.querySelector("#enter-login-page").onclick = () => {
    loginpage.classList.toggle('active');
}
document.querySelector(".cancel").onclick=()=>{
    loginpage.classList.remove('active');
}

let loginpage1 = document.querySelector(".login-page")
document.querySelector("#enter-login-page1").onclick = () => {
    loginpage1.classList.toggle('active');
}
document.querySelector(".cancel").onclick=()=>{
    loginpage1.classList.remove('active');
}

            let signuppage = document.querySelector(".signup-page")
            document.querySelector("#ekbpwy").onclick = () => {
             signuppage.classList.toggle('active');
             }
            document.querySelector("#back").onclick=()=>{
            signnuppage.classList.remove('active');
            }

            $(document).scroll(function() {

                myID = document.getElementById("#hidden-nav-id");
        
                var myScrollFunc = function () {
                    var y = window.scrollY;
                    if (y >= 100) {
                        myID.className = "#hidden-nav-id show"
                    } else {
                        myID.className = "#hidden-nav-id hide"
                    }
                };
        
                window.addEventListener("scroll", myScrollFunc);
            });
