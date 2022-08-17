export default function toggleBookmark(){
    const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
    bookmarks.forEach((bookmark)=>{
        //was soll jetzt jedes Element einzeln machen: hier jeder bookmark-Button
    
        bookmark.addEventListener('click', () => {
        bookmark.classList.toggle('hidden');
    });
    });
}


// export default function toggleBookmark() {


// function toggleBookmark1() {
//     const bookmark = document.querySelector('[data-js="bookmark1"]');
//     const bimg = document.querySelector('[data-js="bimg1"]');
//     bookmark.addEventListener('click', () => {
//         bimg.classList.toggle('hidden');
//     });
// }

// function toggleBookmark2() {
//     const bookmark = document.querySelector('[data-js="bookmark2"]');
//     const bimg = document.querySelector('[data-js="bimg2"]');
//     bookmark.addEventListener('click', () => {
//         bimg.classList.toggle('hidden');
//     });
// }

// function toggleBookmark3() {
//     const bookmark = document.querySelector('[data-js="bookmark3"]');
//     const bimg = document.querySelector('[data-js="bimg3"]');
//     bookmark.addEventListener('click', () => {
//         bimg.classList.toggle('hidden');
//     });
// }
// toggleBookmark1();
// toggleBookmark2();
// toggleBookmark3();
// }

// export { toggleBookmark1, toggleBookmark2, toggleBookmark3 }
