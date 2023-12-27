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

// Создаем массив пар
const keys = Object.entries(quitarPlayer)

export const objectMethod = () => {
    return keys
}