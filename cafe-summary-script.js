window.addEventListener('load',()=>{
    loading.classList.add('loaded');
})

const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");

zoom.forEach(function(value)
{
    value.addEventListener("click",kakudai);
});

function kakudai(e){
    zoomback.style.display
    ="flex";
    zoomimg.setAttribute("src",e.target.getAttribute("src"));
}

zoomback.addEventListener("click",modosu);
function modosu(){
    zoomback.style.display
    ="none";
}

const triggers = document.querySelectorAll('.trigger');
triggers.forEach(trigger =>{
    trigger.addEventListener('click',()=>{
        trigger.classList.toggle('is-active');

        const targetClass = trigger.dataset.target;
        const targets = document.querySelectorAll('.' + targetClass);
        targets.forEach(target => {
            target.classList.toggle('hidden');
        });
    })
});
