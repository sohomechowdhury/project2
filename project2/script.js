let taskbar=document.getElementsByClassName("taskbar")[0]
let startmenu=document.getElementsByClassName("startmenu")[0]

taskbar.addEventListner("click",( )=>{
    if(startmenu.style.bottom =="50px"){
        startmenu.style.bottom ="-655px"
    }
    else{
        startmenu.style.bottom ="50px"
    }
})