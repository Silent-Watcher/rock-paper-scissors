const button = document.querySelector('#play__button');
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    button.classList.add('btn--clicked');
    document.querySelectorAll('span').forEach((element)=>{element.classList.add('expanded')})
    
    
    
    
    /* 
---------------------------------------
just to reset without having to refresh..
 --------------------------------*/
    //  setTimeout(()=>{button.classList.remove("btn--clicked")},3500);
    //  setTimeout(()=>{document.querySelectorAll('span').forEach((element)=>{element.classList.remove('expanded')})},1700)
    });