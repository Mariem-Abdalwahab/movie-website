let movieLists = document.querySelectorAll(".movie-list");
let arrowsR = document.querySelectorAll(".right");
let arrowsL = document.querySelectorAll(".left");
let btn = document.querySelector(".toggle");
let btnSpan = document.querySelector(".toggle span");
let counter;
// Right
arrowsR.forEach((arrow,i)=>{
     counter = 1; num = 7
    arrow.addEventListener("click",()=>{
       console.log(arrow.classList.contains("right"));
       let items = movieLists[i].querySelector(".items");
       if(num - counter >= Math.floor(window.innerWidth/292)){
        let p = -292* counter 
        items.style.transform = `translateX(${p}px)`;
        counter++;
        console.log(counter);
       }else{
        counter = 1;
        items.style.transform = `translateX(0px)`;

       }
    })
})




let toActive = document.querySelectorAll(".navbar , .sidebar, .movie-list");

btn.addEventListener("click",()=>{
    btn.classList.toggle('active')
    btnSpan.classList.toggle('active')
    toActive.forEach(r=>{
        r.classList.toggle("active")
    })
    
})


