
// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
    let numberArray = [];
    for (let i = 2; i <= (count * 2) + 1; i += 1) {
        numberArray.push(parseInt(i / 2));
    }

    return numberArray;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame(count) {
    let arrays = shuffle(createNumbersArray(count));

    for (const arr of arrays) {
        const card = document.createElement('div');
        card.id = arr;
        card.classList.add('game__card');
        card.textContent = arr;
        

        card.addEventListener('click', () => {
            const gameCard = document.querySelectorAll('.game__card');
            // if (card.textContent === idNumberCard ) {
            //     card.classList.add('open');
            // } else {
            //     card.classList.remove('open');
            // }
        })
        document.getElementById('game').append(card);
        
    }
}

console.log(startGame(8));
