let portimg=Array.from(document.getElementsByClassName("portimage"))
let hovitem=Array.from(document.getElementsByClassName("hover-items"))
portimg.forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.style.transition = "all .4s ease-in-out";
        element.style.opacity=0;
    })
    element.addEventListener('mouseout',()=>{
        element.style.transition = "all .4s ease-in-out";
        element.style.opacity=1;
});
hovitem.forEach(element=>{
    element.addEventListener('mouseover',()=>{
        element.style.transition = "all .4s ease-in-out";
        element.style.opacity=1;
    })
    element.addEventListener('mouseout',()=>{
        element.style.transition = "all .4s ease-in-out";
        element.style.opacity=0;
    })
    })
    //element.style.zIndex=1;
})