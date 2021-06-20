const navSlide = () =>{

    const burger = document.querySelector(".burger");
    const nav =document.querySelector(".nav__links");
    const navList =document.querySelectorAll(".nav__links li")
    
    burger.addEventListener("click",()=>{

        nav.classList.toggle('active');

        navList.forEach((link,index)=>{
          
        if(link.style.animation){
            link.style.animation = '';
        }

        else{
            link.style.animation = `liAnimation 0.7s ease forwards ${index/7 +0.2}s`
        }
    
        })


    });
}

navSlide();