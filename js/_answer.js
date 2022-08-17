export default function toggleAnswer(){
    const cards = document.querySelectorAll('[data-js="qcard"]');
    cards.forEach((card)=>{
        const showAnswer = card.querySelector('[data-js="showanswer"]');
        const answer = card.querySelector('[data-js="answer"]');
        showAnswer.addEventListener('click', () => {
            answer.classList.toggle('hidden');
        });
    });
}

// export function showAnswer1() {
//     const showAnswer = document.querySelector('[data-js="showanswer1"]');
//     const answer = document.querySelector('[data-js="answer1"]');
//     showAnswer.addEventListener('click', () => {
//         answer.classList.toggle('hidden');
//     });
// }


// export function showAnswer2() {
//     const showAnswer = document.querySelector('[data-js="showanswer2"]');
//     const answer = document.querySelector('[data-js="answer2"]');
//     showAnswer.addEventListener('click', () => {
//         answer.classList.toggle('hidden');
//     });
// }


// export function showAnswer3() {
//     const showAnswer = document.querySelector('[data-js="showanswer3"]');
//     const answer = document.querySelector('[data-js="answer3"]');
//     showAnswer.addEventListener('click', () => {
//         answer.classList.toggle('hidden');
//     });
// }

