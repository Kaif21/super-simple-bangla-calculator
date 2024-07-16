let inputBox = "";
let keys = document.querySelectorAll('.key');

Array.from(keys).forEach((key) => {
    key.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (inputBox.includes('%')) {
                let [number, percentage] = inputBox.split('*');
                inputBox = (parseFloat(number) * parseFloat(percentage) / 100).toString();
            } else {
                inputBox = eval(inputBox).toString();
            }
        } else if (e.target.innerHTML == 'C') {
            inputBox = "";
        } else {
            inputBox += e.target.innerHTML;
        }
        document.querySelector('input').value = inputBox;
    });
});

// make an else for % calculation
// make an btn to delete only 1 key in the inputbox
//empty the inputbox after result when type some thing else
//make * look like X
  