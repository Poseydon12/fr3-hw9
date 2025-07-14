function processList(data) {
    let index = 0;
    while (index < data.length) {
        const entry = `${index + 1} - ${data[index]}`;
        console.log(entry);
    }
}

// Приклад використання
processList(['Mango', 'Poly', 'Ajax']);
