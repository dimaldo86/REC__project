
const showCard = (cardSelector,btnSelector) => {
    const hiddenCards = document.querySelectorAll(cardSelector),
          btnShow = document.querySelector(btnSelector);

    if (btnShow) {
        btnShow.addEventListener('click', () => {
            hiddenCards.forEach(card => {
                card.classList.toggle('hidden');

                if (!card.classList.contains('hidden')) {
                    btnShow.textContent = "cкрыть";
                } else  {
                    btnShow.textContent = "показать больше";
                }
            });
        });
    }
}


export default showCard;