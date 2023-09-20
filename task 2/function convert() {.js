function addToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
    document.getElementById('result').innerHTML = '';
}

function convert(type) {
    const input = document.getElementById('input').value;
    if (type === 'cToF') {
        const result = (input * 9/5) + 32;
        document.getElementById('result').innerHTML = `${input}°C = ${result}°F`;
    } else if (type === 'fToC') {
        const result = (input - 32) * 5/9;
        document.getElementById('result').innerHTML = `${input}°F = ${result}°C`;
    }
}
