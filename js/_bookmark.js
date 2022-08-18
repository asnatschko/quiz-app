
export default function toggleBookmark() {
    const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
    bookmarks.forEach((bookmark) => {
        let saved = false;
        //const bookmark = card.querySelector('[data-js="bookmark"]');
        const bimg = bookmark.querySelector('[data-js="bimg"]');
        bookmark.addEventListener('click', () => {
            saved = !saved;
            bimg.src = saved ? "./css/Assets/select.png" : "./css/Assets/unselect.png";
        });
    });
}


