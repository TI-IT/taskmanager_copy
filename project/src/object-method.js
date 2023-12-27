const quitarPlayer = {
    firstName: 'Richie',
    lastName: 'Sambora',
    soloSpeed: 10,
    birthDate: `11.07.1959`,
    qitarCount: 277,
    isLeftHanded: false,
    play () {
        console.log(`Play solo ${speed}x`);
    },
}

// Создаем массив массивов пар *** ключ / значение
const keys_values = Object.entries(quitarPlayer)

// Создаем массив пар ***  значение
const values = Object.values(quitarPlayer)

// Создаем массив пар ***  ключ
const keys = Object.keys(quitarPlayer)

// Получаем все методы (для глубокого перебора используем for in вместо of)
for (let propertyName of keys){
    if (typeof quitarPlayer[propertyName] === `function`){
        quitarPlayer[propertyName]();
    }
}

export const objectMethod = () => {
    return keys
}