// Check if a string is a palindrome
function isPalindrome(str) {
    // Convert string to lowercase, remove non-alphanumeric characters
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check string is equal to its reverse
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Display Results
function displayResult(text, isPalindrome) {
    const resultDiv = document.getElementById('result');
    if (isPalindrome) {
        resultDiv.textContent = text + ' is a palindrome';
        resultDiv.style.color = '#4CAF50'; 
    } else {
        resultDiv.textContent = text + ' is not a palindrome';
        resultDiv.style.color = '#FF5733';
    }
}

// Function to update character count
function updateCharacterCount(text) {
    document.getElementById('character-count').textContent = 'Characters: ' + text.length;
}

// Event listener for button click
document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.trim();
    const resultDiv = document.getElementById('result');

    // Check if input is empty
    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    // Check if input is a palindrome
    const isPalin = isPalindrome(inputText);
    displayResult(inputText, isPalin);
});

// Event listener for clear button click
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('text-input').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('character-count').textContent = 'Characters: 0';
});

// Event listener for input field change
document.getElementById('text-input').addEventListener('input', function() {
    updateCharacterCount(this.value);
});

// Copy result to clipboard
document.getElementById('result').addEventListener('click', function() {
    const resultText = document.getElementById('result').textContent;
    navigator.clipboard.writeText(resultText)
        .then(() => alert('Result copied to clipboard'))
        .catch(err => console.error('Failed to copy: ', err));
});
