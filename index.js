const ques = document.getElementsByClassName('question');
const arrows = document.getElementsByClassName('arrow');

for (let i = 0; i < ques.length; i++) {

    ques[i].addEventListener('click', evt => {
        evt.target.classList.toggle('active');
    });

    arrows[i].addEventListener('click', () => {
        ques[i].classList.toggle('active');
    });
}