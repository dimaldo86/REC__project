const arrowShow = (triggerSelector, arrowSelector) => {
    const trigger = document.querySelector(triggerSelector),
          arrow = document.querySelector(arrowSelector);

    trigger.addEventListener('click', (e) => {

        if (e.target.matches('.dropdown-toggle')) {
            arrow.classList.toggle('active')
        }

    });
};

export default arrowShow;