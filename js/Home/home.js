let switcherlis=document.querySelectorAll(".type-post li")
let lisarray=Array.from(switcherlis)
console.log(switcherlis)
let divs=document.querySelectorAll(".all-posts > div")
let divsarray=Array.from(divs)
console.log(divs)
console.log(divsarray)
lisarray.forEach((ele)=>{
    ele.addEventListener("click",function(e){
        lisarray.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        divsarray.forEach((div)=>{
           div.style.display="none"; 
        })
    
            document.querySelector(e.currentTarget.dataset.cont).style.display="block";
            
            
        
        
        
    });
   

})

/*function manageimgs(){
    imgs.forEach((img)=>{img.style.display="none";})
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display="block"
    })
}*/
/**################################################ */
let count=document.querySelector(".count")
let textarea_comment=document.querySelector(".comment-textarea")
let maxlength=textarea_comment.getAttribute("maxlength")
console.log(maxlength)
console.log(textarea_comment)
console.log(count)
count.innerHTML=maxlength
textarea_comment.oninput=function(){
    count.innerHTML=maxlength-this.value.length
    count.innerHTML==0?count.classList.add("zero"):count.classList.remove("zero")
}



/** #######################################3*/
let buttons_left=document.querySelectorAll(".m-left .container .content .buttons ul li a")
console.log(buttons_left)
buttons_left.forEach((li)=>{
    li.addEventListener("click",removeactive)

})
function removeactive(){
    buttons_left.forEach((li)=>{
        li.classList.remove("l-active")
        this.classList.add("l-active")
    })
}
/**###############################################3 */
/*let add=document.querySelector(".addbtn")
let close=document.querySelector(".close")
console.log(add)
let form=document.querySelector('.form')
let contactform=document.querySelector('.form .addcontact')
add.addEventListener('click',()=>{
    form.classList.add('overlay');
    contactform.style.display='block';
})
close.addEventListener('click',()=>{
    form.classList.remove('overlay');
    contactform.style.display='none';
})*/
let close=document.querySelector(".close svg")
let normal=document.querySelector(".add-post .normal");
let normalclick_con=document.querySelector(".add-post .normal-click .con");
let normalclick=document.querySelector(".add-post .normal-click ");
normal.onclick=function(){
    normalclick.classList.add("overlay")
    normalclick.style.display="block"
}
close.onclick=function(){
    normalclick.classList.remove("overlay")
    normalclick.style.display="none"
}
console.log(close)
/**################################ */


let main_right=document.querySelector("main .m-right .right")
let list_right=document.querySelector(".list-right")
list_right.onclick=function(){
    main_right.classList.toggle("list-toogle")
}
console.log(list_right)