/* const imu = require("nodeimu").IMU;
const IMU = new imu();

IMU.getValue((err, data) => {
    if (err !== null) {
        console.error("Could not read sensor data: ", err);
        return;
    }
});
*/

const matrix = require('sense-hat-led');
matrix.showMessage('test');
matrix.flashMessage();
