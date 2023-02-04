
// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
    const numberArray = [];
    for (let i = 2; i <= (count * 2) + 1; i += 1) {
        numberArray.push(parseInt(i / 2));
    }

    return numberArray;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
const removeOpen = (card1, card2) => {
    card1.classList.remove('open');
    card2.classList.remove('open');
}

const addSuccess = (card1, card2) => {
    card1.classList.add('success');
    card2.classList.add('success');
    removeOpen(card1, card2);
}

const initialization = (arrays) => {
    const section = document.createElement('section');
    section.classList.add('section');
    document.querySelector('body').prepend(section);

    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add('section__container');
    document.querySelector('.section').append(sectionContainer);

    const sectionGame = document.createElement('div');
    sectionGame.classList.add("section__game", "game");
    document.querySelector('.section__container').append(sectionGame);

    const button = document.createElement('button');
    button.classList.add('section__btn-game');
    button.textContent = 'Сыграть ещё раз';
    document.querySelector('.game').append(button);

    const title = document.createElement('h1');
    title.classList.add('section__title');
    title.textContent = 'Поздравляем!';
    document.querySelector('.section__container').prepend(title);

    arrays.forEach(element => {
        const card = document.createElement('div');

        card.classList.add('game__card');
        card.textContent = element;

        document.querySelector('.game').prepend(card);
    });

    button.addEventListener('click', (e) => {
        desctruction();
        startGame(4);
    });

};

const desctruction = () => {
    document.querySelector('section').remove('section');
};

const isEqualsCard = (card1, card2) => {
    return card1.textContent === card2.textContent;
};

const isInitCard = (card1, card2) => {
    return card1 !== undefined && card2 !== undefined;
}

function startGame(count) {
    let arrays = shuffle(createNumbersArray(count));

    initialization(arrays);

    const section = document.querySelector('.section__game');

    let card1 = undefined,
        card2 = undefined;

    section.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('success') || target.classList.contains('open')) {
            return;
        }

        if(isInitCard(card1, card2) && !isEqualsCard(card1, card2)) {
            removeOpen(card1, card2);
        }

        target.classList.add('open');

        const openDocuments = document.querySelectorAll('.open');

        if (openDocuments.length === 2) {
            [card1, card2] = openDocuments;
            if (isEqualsCard(card1, card2)) {
                addSuccess(card1, card2);
            }
        }

        const successDocuments = document.querySelectorAll('.success');
        if (successDocuments.length === arrays.length) {
            const successButton = document.querySelector('button');
            const successTitle = document.querySelector('h1');
            successButton.classList.add('section__btn--activ');
            successTitle.classList.add('section__title--active');
        }
    });
}
startGame(4);

