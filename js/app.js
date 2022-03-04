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