function writeCards(names, eventName) {
    let messages = []; // Create an empty array to hold the messages

    for (let i = 0; i < names.length; i++) {
        // Build the message using string interpolation
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message); // Add the message to the array
    }

    return messages; // Return the array of messages
}

// Example usage:
let messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

// Example usage:
countDown(10);
console.log(6)
console.log(4)
