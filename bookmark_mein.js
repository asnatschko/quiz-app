export default function toggleBookmark() {
    //Konstante Variable Bookmarks aus der Indexdatei erstellt aus allen data-js bookmark
    const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
    //Einzelne Variablen intern erstellt
    bookmarks.forEach((bookmark)=> {
        //Veränderliche Variable notSaved gesetzt auf false
        let saved = false;
        const bimg = bookmark.querySelector('[data-js="bimg"]');
        //Clickevent auf das Bookmark
        bimg.addEventListener("click", () => {
             //if else funktion
            saved = !saved;
            bimg.src = saved ? "./css/Assets/select.png" : "./css/Assets/unselect.png";
        });
    });
}

toggleBookmark();