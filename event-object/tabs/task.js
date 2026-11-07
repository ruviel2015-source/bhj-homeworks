const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach((container) => {
    const tabs = Array.from(container.querySelectorAll('.tab'));
    const contents = Array.from(container.querySelectorAll('.tab__content'));

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const activeTab = container.querySelector('.tab_active');
            const activeContent = container.querySelector('.tab__content_active');

            if (activeTab) activeTab.classList.remove('tab_active');
            if (activeContent) activeContent.classList.remove('tab__content_active');

            tab.classList.add('tab_active');

            const index = tabs.indexOf(tab);
            contents[index].classList.add('tab__content_active');
        });
    });
});