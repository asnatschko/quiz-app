/*function toggleBookmark(){
    const bookmark = document.querySelector('[data-js="bookmark"]');
    bookmark.addEventListener('click', () => {
        saved = !saved;
        bimg.src = saved ? "./css/Assets/select.png" : "./css/Assets/unselect.png";
    });
}*/
import toggleBookmark from "./js/_bookmark.js";
import toggleAnswer from "./js/_answer.js";

//import { showAnswer1, showAnswer2, showAnswer3 } from "./js/_answer.js";

function initPages() {
    const pages = ["indexPage", "bookmarkPage"]
    pages.forEach((pageId) => {
        let element = document.querySelector("#" + pageId)
        element.style.display = "none"
    })
}

function switchPage(pageId) {
    initPages()
    let element = document.querySelector("#" + pageId)
    element.style.display = ""
}

function initPageButtons() {
    const buttons = {
        "indexPageButton": "indexPage", 
        "bookmarkPageButton": "bookmarkPage"
    }
    Object.entries(buttons).forEach(([buttonId, pageId]) => {
        let element = document.querySelector("#" + buttonId)
        element.addEventListener("click", (e) => {
            console.log(e)
            e.preventDefault();
            switchPage(pageId)
            element.classList.add("active")
        })
    })
}

switchPage("indexPage")
initPageButtons()

toggleBookmark();
toggleAnswer();



// showAnswer1();
// showAnswer2();
// showAnswer3();



    
