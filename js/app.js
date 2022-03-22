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
window.addEventListener('load',()=>{
    let navH = navbar.getBoundingClientRect().height;
    let scrHi = window.pageYOffset;
    if(scrHi > navH){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
})


function coutdown(){
    // time out
let myDays = document.getElementById('days')
let myHours = document.getElementById('hours')
let myMinutes = document.getElementById('minutes')
let mySeconds = document.getElementById('seconds')
// console.log(myDays)

let future = new Date('jun 20, 2022').getTime();
let now = new Date().getTime();
let gap = future - now;

// assinging the values into millli seconds
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

// dividing into pieces 
let d = Math.floor(gap / day);
let h = Math.floor((gap % day) / hour);
let m = Math.floor((gap % hour) / minute);
let s = Math.floor((gap % minute) / second);
// console.log(s)

// ku buuxinta days into 0 
if(d < 10){
    d = '0'+d
}else{
    d = d
}
// ku buuxinta hours into 0 
if(h < 10){
    h = '0'+h
}else{
    h = h
}
// ku buuxinta minutes into 0 
if(m < 10){
    m = '0'+m
}else{
    m = m
}
// ku buuxinta second into 0 
if(s < 10){
    s = '0'+s
}else{
    s = s
}
myDays.innerHTML = `${d}:`;
myHours.innerHTML = `${h}:`;
myMinutes.innerHTML = `${m}:`;
mySeconds.innerHTML = s;

}
setInterval(coutdown, 100);

