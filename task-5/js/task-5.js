function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Приклад використання
console.log(checkForSpam("This is a sale!")); // true
console.log(checkForSpam("This is a test message.")); // false
