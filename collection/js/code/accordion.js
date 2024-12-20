let summarys;
window.addEventListener("load", function () {
    summarys = document.querySelectorAll(".wrap_list ul li");

    for (let i = 0; i < summarys.length; i++) {
        summarys[0].parentNode.classList.add("active");
        summarys[0].parentNode.lastElementChild.style.maxHeight = summarys[0].parentNode.lastElementChild.scrollHeight + "px";

        summarys[i].onclick = function () {
            if (this.parentNode.lastElementChild.style.maxHeight) {
                hideDetail();
            } else {
                showDetail(this);
            }
        };
    }
});

function showDetail(elem) {
    hideDetail();
    elem.parentNode.classList.add("active");
    elem.parentNode.lastElementChild.style.maxHeight = elem.parentNode.lastElementChild.scrollHeight + "px";
}

function hideDetail() {
    const summaryDetails = document.querySelectorAll(".detail_w");
    for (let i = 0; i < summaryDetails.length; i++) {
        summaryDetails[i].style.maxHeight = null;
        summarys[i].parentNode.classList.remove("active");
    }
}
