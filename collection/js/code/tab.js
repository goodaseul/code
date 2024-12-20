//tab
function tabClick(tab, contents) {
    tab.forEach((item, index) => {
        item.addEventListener("click", () => {
            tab.forEach((item) => {
                item.classList.remove("active");
            });
            tab[index].classList.add("active");
            contents.forEach((itemCont) => {
                itemCont.classList.remove("active");
            });
            contents[index].classList.add("active");
        });
    });
}
