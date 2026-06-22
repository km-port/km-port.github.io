const loading = document.querySelector('#loading');

window.addEventListener('load',()=>{
    loading.classList.add('loaded');
});


const menuOpen=document.querySelector('#menu-open') ;
const menuClose=document.querySelector('#menu-close') ;
const menuPanel=document.querySelector('#menu-panel') ;
const menuOptions = {
    duration: 1400,
    easing:'ease',
    fill: 'forwards',
};
const menuLinks=document.querySelectorAll('.menu-item');

//メニューを開く
menuOpen.addEventListener('click',()=>{
    //console.log('メニューを開く');
    menuPanel.animate({translate:['100vw',0]},menuOptions)
});

//メニューを閉じる
menuClose.addEventListener('click', ()=>{
    menuPanel.animate({translate:[0, '100vw']},menuOptions)
})
menuLinks.forEach(link=>{
  link.addEventListener('click', ()=>{
    //console.log('メニューを開く');
    menuPanel.animate({translate:[0, '100vw']},menuOptions)
})
});
