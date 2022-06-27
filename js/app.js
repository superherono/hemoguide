(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const headerBtn = document.querySelector(".header__button");
    headerBtn.addEventListener("click", (function(e) {
        document.documentElement.classList.toggle("impaired-mode");
    }));
    const videoBtn = document.querySelector(".video-play");
    const video = document.querySelector(".video__file");
    videoBtn.addEventListener("click", (function() {
        if (video.classList.contains("active")) {
            video.pause();
            video.classList.remove("active");
        } else {
            video.play();
            video.classList.add("active");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();