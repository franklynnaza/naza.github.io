var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer" ],
    typeSpeed:30,
    backSpeed:60,
    loop:true
})
var typed = new Typed(".typingg",{
    strings:["Welcome to my portfolio! I'm Naza, a web developer with a passion for building web programs. Through 4 years of experience, I've developed skills in web development. This page showcases some of my recent work and provides insight into my expertise. Let's collaborate on your next project!" ],
    typeSpeed:60,
    backSpeed:100000,
    loop:true
})






const nav = document.querySelector(".nav"),
navlist = document.querySelectorAll("li"),
totalNavlist = navlist.length;
var allsection =document.querySelectorAll(".section"),
totalsection = allsection.length
for(let i=0; i<totalNavlist; i++){
   const a = navlist[i].querySelector("a")
  a.addEventListener("click", function(){
   removebacksection();
    for(let j=0; j<totalNavlist; j++){
        if(navlist[j].querySelector("a").classList.contains("active")){
          addbacksection(j);
            // allsection[j].classList.add("back-section");
        }
        navlist[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth<1200){
        bbb();
    }
  })
}
function removebacksection()
{
    for( let i=0; i<totalsection; i++){
        allsection[i].classList.remove("back-section")
    }
}
function addbacksection(num)
{
    allsection[num].classList.add("back-section");
}
function showSection(element){
    for( let i=0; i<totalsection; i++){
        allsection[i].classList.remove("active")
    }
    const target =element.getAttribute("href").split("#")[1];
  document.querySelector("#" +target).classList.add("active");

  
}
function updateNav(element){
    for(let i=0; i<totalNavlist; i++){
        navlist[i].querySelector("a").classList.remove("active")
        const target =  element.getAttribute("href").split("#")[1];
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navlist[i].querySelector("a").classList.add("active")
        }
    }
}

const navbtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside")
navbtn.addEventListener("click", ()=>{
    bbb();
})
function bbb(){
    aside.classList.toggle("open");
    navbtn.classList.toggle("open");
    
}


// const TagCloud = require('TagCloud');

//                                     const container = '.tagcloud';
//                                     const texts = [
//                                         '3D', 'TagCloud', 'JavaScript',
//                                         'CSS3', 'Animation', 'Interactive',
//                                         'Mouse', 'Rolling', 'Sphere',
//                                         '6KB', 'v2.x',
//                                     ];
//                                     const options = {};
                                    
//                                     TagCloud(container, texts, options);







