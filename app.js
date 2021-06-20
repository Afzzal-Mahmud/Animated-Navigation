const navSlide = () =>{

    const burger = document.querySelector(".burger");
    const nav =document.querySelector(".nav__links");
    const navList =document.querySelectorAll(".nav__links li")
    
    burger.addEventListener("click",()=>{

        nav.classList.toggle('active');
        

    });
}

navSlide();