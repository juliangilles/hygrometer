const imu = require("nodeimu").IMU;
const matrix = require('sense-hat-led').sync;
matrix.lowLight = true;
matrix.setRotation(180);
matrix.showMessage(`... booting ...`, 0.2);
matrix.clear();
const IMU = new imu();
setInterval(() => {
    const data = IMU.getValueSync();
    console.log(data.humidity);
    const humidity = Number(Number(data.humidity).toString().replace('e-', '')).toFixed(2);
    matrix.showMessage(`${humidity}%`, 0.2);
    matrix.clear();
}, 8000);
