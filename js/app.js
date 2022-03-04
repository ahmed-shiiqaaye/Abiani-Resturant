  // filter js file
  let filterBtn = document.querySelector('.btns');
  let filterImg = document.querySelectorAll('.images img');

  window.onload = () =>{
      filterBtn.addEventListener('click',(e)=>{
          let selected = e.target;
          if(selected.classList.contains('btn')){
              //  selecting the active button
              let highlitedBtn = filterBtn.querySelector('.active');
              highlitedBtn.classList.remove('active')
              selected.classList.add('active')
              // selecting the attribute
              let filtername = selected.getAttribute('data-name');
              filterImg.forEach((img)=>{
                 let filteredImg =  img.getAttribute('data-name')
              //  if selected btn data-name is equal to the img data-name
              // or equal to data-name "all"
                 if((filteredImg == filtername) || filtername == "all"){
                  img.classList.add('show')
                 }else{
                     img.classList.add('hide')
                     img.classList.remove('show')
                 }
                 });

          }
      })
  }
//   ====== navbar
let times =document.getElementById('times')
let menu =document.getElementById('menu')
let links = document.querySelector('.links')

menu.addEventListener('click',function(){
    links.classList.add('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})
// fixed navbar
let navbar = document.querySelector('.navbar');
let navlinks = navbar.querySelector('links a')
window.addEventListener('load',()=>{
    let navH = navbar.getBoundingClientRect().height;
    let scrHi = window.pageYOffset;
    console.log(scrHi)
    if(scrHi > navH){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
})