var cd = '';

function appendToDisplay(value) {
    cd += value;
    document.getElementById('display').value = cd;
}

function clearDisplay() {
    cd = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(cd);
        document.getElementById('display').value = result;
        cd = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        cd = '';
    }
}