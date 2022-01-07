const accordion = (triggersSelector) => {

    const body = document.querySelector('body');
    let btns = document.querySelectorAll(triggersSelector);
    


    btns.forEach(btn => {
        btn.addEventListener('click', function() {

          let panel = this.nextElementSibling;
          
            this.classList.toggle('acc-active');
            panel.classList.toggle('acc-content');
                
            body.classList.remove('lock');

          
        
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
              body.classList.remove('lock');
              
            } else {
              panel.style.maxHeight = panel.scrollHeight + 600 + "px";
              body.classList.add('lock');
            }
        });
    });

  //   btns.forEach(btn => {
  //     btn.addEventListener ('click', function () {
  //       let panel = this.nextElementSibling;
  //       console.log(panel);
  //         this.classList.toggle('acc-active');
  //        panel.classList.toggle('acc-content');
  
  //         if(this.classList.contains('acc-active')) {
  //            panel.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px';
  //         } else {
  //            panel.style.maxHeight = '0px';
  //         }
  //     });
  
  // });
};

export default accordion;