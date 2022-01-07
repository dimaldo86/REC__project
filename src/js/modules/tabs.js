const tabs = (btnSelector, contentSelector, activeClass) => {
  
  const tabsBtn   = document.querySelectorAll(btnSelector);
  const tabsItems = document.querySelectorAll(contentSelector);

  tabsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let currentBtn = btn;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

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
  
  // tabsBtn.forEach(onTabClick);
  
  // function onTabClick(item) {
  //     item.addEventListener("click", function() {
  //         let currentBtn = item;
  //         let tabId = currentBtn.getAttribute("data-tab");
  //         let currentTab = document.querySelector(tabId);
         
  
  //         if( ! currentBtn.classList.contains('active') ) {
  //             tabsBtn.forEach(function(item) {
  //                 item.classList.remove('active');
  //             });
      
  //             tabsItems.forEach(function(item) {
  //                 item.classList.remove('active');
  //             });
      
  //             currentBtn.classList.add('active');
  //             currentTab.classList.add('active');
  //         }
  //     });
  // }
  
  // document.querySelector('.portfolio__list-title').click();
  
}

export default tabs;