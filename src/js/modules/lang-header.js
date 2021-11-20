const langChange = (selector) => {
    const top = document.querySelector('.top');
    const topFlag = document.querySelector('.top__flag');
    const ukFlag = document.querySelector('#uk');
    const rusFlag = document.querySelector('#rus');
    const bottomArrow = document.querySelector('.bottom__arrow');

    topFlag.addEventListener('click', function(e) {
        if (e.target.classList.contains('bottom__arrow')) {
            e.target.classList.toggle('bottom__arrow--active');
            top.style.marginBottom = '30px';
        }
    });
    // const acc = document.getElementsByClassName("top__flag-lang");
    // let i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //         /* Toggle between adding and removing the "active" class,
    //         to highlight the button that controls the panel */
    //         this.classList.toggle("active");

    //         /* Toggle between hiding and showing the active panel */
    //         const panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
// }

   
}
export default langChange;