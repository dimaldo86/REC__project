const tabs = (btnSelector, contentSelector, activeClass) => {
  
  const tabsBtn   = document.querySelectorAll(btnSelector);
  const tabsItems = document.querySelectorAll(contentSelector);

  tabsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let currentBtn = btn;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);
      let accTitle = currentTab.getAttribute('data-title');
      console.log(accTitle);

      if( ! currentBtn.classList.contains(activeClass) ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove(activeClass);
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove(activeClass);
            });
    
            currentBtn.classList.add(activeClass);
            currentTab.classList.add(activeClass);
  
        }
    });
  });
  
  
}

export default tabs;