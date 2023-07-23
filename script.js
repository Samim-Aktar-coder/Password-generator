let input = document.querySelector('.input__control input');
let copyBtn = document.querySelector('.input__control .copy');
let generatePasswordBtn = document.querySelector('.generate__btn');
let alphabet = document.querySelector('.word input');
let number = document.querySelector('.numbers input');
let specialCharacter = document.querySelector('.special-character input');
let passwordLength = document.querySelector('.password-length input');
let passwordWarning = document.querySelector('.password-length p');
let modal = document.querySelector('.modal');

let isNumberAdded = number.checked;
let isSpecialCharacterAdded = specialCharacter.checked;
let passwordLengthValue = +passwordLength.value;



number.addEventListener('click', () => {
    isNumberAdded = number.checked;
});

specialCharacter.addEventListener('click', () => {
    isSpecialCharacterAdded = specialCharacter.checked;
});

generatePasswordBtn.addEventListener('click', () => {
    if (passwordLength.value < 6) {
        passwordLengthValue = 6;
        passwordWarning.classList.add('show');
    } else if (passwordLength.value > 20) {
        passwordLengthValue = 20;
        passwordWarning.classList.add('show');
    } else {
        passwordLengthValue = +passwordLength.value;
        passwordWarning.classList.remove('show');
    }

    let password = '';
    for (let i = 1; i <= passwordLengthValue; i++) {
        if (!isNumberAdded && !isSpecialCharacterAdded) {
            let singleLetter = generateSingleCharacter();
            password = singleLetter;
        } else {
            let singleLetter = generateSingleCharacter();
            password += singleLetter;
        }
    }

    input.value = password;
});

function generateSingleCharacter() {

    let singleLetter = '';
    let funnyWords = ["IDontKnow", "Incorrect", "Password", "Nothing", "WrongPassword", "Everything", "YouareaLoser", "GetLost", "BadBoy", "ineedapassword", "newpassword", "IamACompleteIdiot", " iforgot", "password123", " masterpassword", "ImNoMan", "Oreocookies", "GalileoGalileo", "ISaidMaybe", "Pretty_Fly_For_A_Wi-Fi", "SayMyName", "TheyAreWatching", "TakeBackTheEmpire", "404Network", "UmbrellaCorporation", "IWillLoseMyTemper", "MotherOfDragons", "doubleclick", "passwordforoldpeople", 'IamIronMan', 'BringMeThanos'];
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let specialCharacters = ['~', '!', '@', '#', '$', '%', '&', '*', '_', '-', '+', '<', '?', '>', '/'];

    if (isNumberAdded && isSpecialCharacterAdded) {

        let commonArray = [...numbers, ...specialCharacters, ...letters, ...numbers, ...specialCharacters];
        let randomNumber = Math.floor(Math.random() * commonArray.length);
        singleLetter = commonArray[randomNumber];

    } else if (isNumberAdded) {

        let commonArray = [...numbers, ...letters, ...numbers];
        let randomNumber = Math.floor(Math.random() * commonArray.length);
        singleLetter = commonArray[randomNumber];

    } else if (isSpecialCharacterAdded) {

        let commonArray = [...specialCharacters, ...letters, ...specialCharacters];
        let randomNumber = Math.floor(Math.random() * commonArray.length);
        singleLetter = commonArray[randomNumber];

    } else {

        let commonArray = [...funnyWords];
        let randomNumber = Math.floor(Math.random() * commonArray.length);
        singleLetter = commonArray[randomNumber];

    }
    return singleLetter;
}


copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value);

    if (input.value) {
        modal.classList.add('show');
    }

    setTimeout(() => {
        modal.classList.remove('show');
    }, 1500);
});