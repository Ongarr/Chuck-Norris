const randomButton = document.querySelector('button');
const jokeText = document.querySelector('.joke-field');
const categoriesButtonsBox = document.querySelector('.categories-buttons');


const updateUI = (data) => {
    const joke = data.value;
    jokeText.innerHTML = `<div class="notification is-warning is-medium">${joke}</div>`;
}


const categoriesList = data => {
    data.forEach(element => {
        categoriesButtonsBox.innerHTML += `<span class="button cat-button ${element}" href="#">${element}</span>`;
        categoriesButtonsBox.addEventListener('click', e => {
            if (e.target.classList.contains(element))
                getJokesFromCategory(element)
                .then(data => updateUI(data))
                .catch(err => console.log(err));
        });
    });
};


getJokes('categories')
    .then(data => categoriesList(data))
    .catch(error => console.log(error))


randomButton.addEventListener('click', e => {
    e.preventDefault()

    getJokes('random')
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});