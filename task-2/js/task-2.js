function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

// Приклад використання
console.log(calculateEngravingPrice("Hello world", 10)); // 20
