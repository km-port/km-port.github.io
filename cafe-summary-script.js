window.addEventListener('load',()=>{
    loading.classList.add('loaded');
})



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
