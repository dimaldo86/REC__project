const accordion = (triggersSelector) => {

    const body = document.querySelector('body');
    let btns = document.querySelectorAll(triggersSelector);
    


    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('acc-active');
            body.classList.remove('lock');

            let panel = this.nextElementSibling;
        
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
              body.classList.remove('lock');
              
            } else {
              panel.style.maxHeight = panel.scrollHeight + 300 + "px";
              body.classList.add('lock');
            }
        });
    });
};

export default accordion;