let inputBox = "";
let convertedMath = "";
let keys = document.querySelectorAll('.key');
// just change the symbol to change the language
const symbolMap = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9',
    '÷': '/', '*':'X'
};

const reverseSymbolMap = Object.fromEntries(
    Object.entries(symbolMap).map(([key, value]) => [value, key])
);

function convertToSymbol(str) {
    return str.split('').map(char => reverseSymbolMap[char] || char).join('');
}

function convertToNumber(str) {
    return str.split('').map(char => symbolMap[char] || char).join('');
}

Array.from(keys).forEach((key) => {
    key.addEventListener('click', (e) => {
        let value = e.target.dataset.value || e.target.innerHTML;
        let display = e.target.innerHTML;

        if (display == '=') {
            if (inputBox.includes('%')) {
                let [number, percentage] = inputBox.split('*');
                inputBox = (parseFloat(number) * parseFloat(percentage) / 100).toString();
            } else {
                inputBox = eval(inputBox).toString();
            }
            convertedMath = convertToSymbol(inputBox);
        } else if (display == 'C') {
            inputBox = "";
            convertedMath = "";
        } else {
            inputBox += value;
            convertedMath += display;
        }
        document.querySelector('input').value = convertedMath;
    });
});