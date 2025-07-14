function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}

// Приклад використання
console.log(formatString("This is a long string that needs to be truncated.")); 
