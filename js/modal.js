var zolamodal=document.querySelector(".zola-modal")
var thinh=document.querySelector(".modalFix")
var deptrai=document.querySelector(".x-zalo")
console.log(thinh,zolamodal,deptrai)

thinh.addEventListener("click",function(){
    // zolamodal.classList.remove('no-closed')
    zolamodal.classList.remove('no-closed')
    thinh.classList.add('no-closed1')
    thinh.classList.remove('Displayblock')
})

deptrai.addEventListener("click",function(){
    zolamodal.classList.add('no-closed')
    thinh.classList.add('Displayblock')
    thinh.classList.remove('no-closed1')
})

