const matrix = require('sense-hat-led').sync;
const spawn = require("child_process").spawn;

matrix.lowLight = true;
matrix.setRotation(180);
matrix.showMessage(`... START ...`, 0.25);
matrix.clear();
displayValue();

function displayValue() {
    const process = spawn('python',["./test.py"] );
    process.stdout.on('data', function(data) {
        const humidity = Number(data.toString()).toFixed(2);
        matrix.showMessage(`${humidity}%`, 0.25);
        matrix.clear();
    } )
};

setInterval(() => {
    displayValue();
}, 10000);
