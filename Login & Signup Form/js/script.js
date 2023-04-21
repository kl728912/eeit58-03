const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
      

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-signup");
    })
})




const password1 = document.querySelector('.p1');
const password2 = document.querySelector('.p2');
const signupBtn = document.querySelector('.signbtn');

signupBtn.addEventListener('click', function(event) {
    event.preventDefault(); 


    if (password1.value !== password2.value) {
        alert('密碼不符合，請重復輸入!'); 
        return;
    }

});
