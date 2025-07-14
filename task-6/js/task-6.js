let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число:");
    if (input === null) {
        break; 
    }
    if (isNaN(input)) {
        alert('Було введено не число, попробуйте ще раз');
        continue; 
    }
    numbers.push(Number(input));
}

for (const number of numbers) {
    total += number; 
}

if (numbers.length > 0) {
    console.log(`Загальна сума чисел дорівнює ${total}`);
}
