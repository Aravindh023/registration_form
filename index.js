let form = document.querySelector(".form");
let submitbtn = document.querySelector(".submit");
let errmsg = document.querySelectorAll(".error-message");
let empty = document.querySelectorAll(".empty-field");
let field,firstname,lastname,email,password,fntarget,lntarget,etarget,ptarget,fn,ln,p,e;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errmsgs of errmsg)
{
    errmsgs.classList.add("d-none");
}

for(let emp of empty)
{
    emp.classList.add("d-none");
}

form.addEventListener("keyup",(e)=>{
    e.preventDefault();
    field = e.target.dataset.key;
    switch(field){
        case "firstname":
            firstname = e.target.value;
            fntarget = e.target;
            break;
        case "lastname":
            lastname=e.target.value;
            lntarget = e.target;
            break;
        case "email":
            email= e.target.value;
            etarget = e.target;
            break;
        case "password":
            password = e.target.value;
            ptarget = e.target;
            break;
        default:
            firstname=lastname=email=password="";
            break;
    }
});

submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
if(firstname)
{    empty[0].classList.add("d-none");
    if(nameRegex.test(firstname))
    {
        fntarget.classList.remove("error");
        errmsg[0].classList.add("d-none");
        fn=true;
    }
    else
    {
        fntarget.classList.add("error")
        errmsg[0].classList.remove("d-none");
        fn= false;
    }
}else{
    empty[0].classList.remove("d-none");
}
if(lastname)
{  empty[1].classList.add("d-none");
    if(nameRegex.test(lastname))
    {
        lntarget.classList.remove("error");
        errmsg[1].classList.add("d-none");
        ln= true;
    }
    else
    {
        lntarget.classList.add("error")
        errmsg[1].classList.remove("d-none");
        ln = false;
    }
}else{
    empty[1].classList.remove("d-none");
}
if(email)
{   empty[2].classList.add("d-none");
    if(emailRegex.test(email))
    {
        etarget.classList.remove("error")
        errmsg[2].classList.add("d-none");
        e = true;
    }
    else
    {
        etarget.classList.add("error")
        errmsg[2].classList.remove("d-none");
        e = false;
    }
}else{
    empty[2].classList.remove("d-none");
}
if(password)
{   empty[3].classList.add("d-none");
    if(pwdRegex.test(password))
    {
        ptarget.classList.remove("error");
        errmsg[3].classList.add("d-none");
        p = true;
    }
    else
    {   ptarget.classList.add("error")
        errmsg[3].classList.remove("d-none");
        p = false;
    }
}else{
    empty[3].classList.remove("d-none");
}

   if(fn && ln && e && p)
   {
    fntarget.value = lntarget.value = ptarget.value = etarget.value = "";
    window.location.href= "/wishlist/index.html";
   }
})