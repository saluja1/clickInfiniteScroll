var infiniteScroll = (wrapperEl, moreBtn) => {
    let items = document.querySelector(wrapperEl).children;
    let moreBtnDOM = document.querySelector(moreBtn);

    let itemsNum = items.length;
    let currentShowNum = 0;
    let lastShowNum = 0;

    var SHOW_NUM = 4;

    showItems();

    moreBtnDOM.addEventListener('click', () => {
        showItems();
    });

    function showItems() {
        currentShowNum += SHOW_NUM;

        if(currentShowNum > itemsNum) {
            for(let i = lastShowNum; i < itemsNum; i++){
                items[i].classList.add('show');
            }
            moreBtnDOM.remove();
        } else {
            for(let i = lastShowNum; i < currentShowNum; i++){
                items[i].classList.add('show');
            }
        }
        lastShowNum = currentShowNum;
    }
};

infiniteScroll('#infinite-scroll-list', '#more-btn');