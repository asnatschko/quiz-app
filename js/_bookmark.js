
export default function toggleBookmark() {
    const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
    bookmarks.forEach((bookmark) => {
        let isBookmark = false;
        //const bookmark = card.querySelector('[data-js="bookmark"]');
        const bimg = bookmark.querySelector('[data-js="bimg"]');
        bookmark.addEventListener('click', () => {
            isBookmark = !isBookmark;
            bimg.src = isBookmark ? "./css/Assets/select.png" : "./css/Assets/unselect.png";
        });
    });
}


