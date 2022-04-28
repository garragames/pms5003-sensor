namespace garragames {

    /**
     Returns the value of the PMS5003 sensor on a scale of 0 to 1000.
     */
    //% blockId=psm5003 weight=10 blockGap=22
    //% block="value of particle sensor at pin %p"
    export function psm5003Sensor(p: DigitalPin): Object {
        let data = '';
        let response = {};
        serial.onDataReceived(String.fromCharCode(0x4d), () => {
            data = serial.readUntil(String.fromCharCode(0x42));
            if (data.length == 24) {
                response = {
                    'apm10':   data.charCodeAt( 4) * 256 + data.charCodeAt( 5), // PM1.0 (CF=1)
                    'apm25':   data.charCodeAt( 6) * 256 + data.charCodeAt( 7), // PM2.5 (CF=1)
                    'apm100':  data.charCodeAt( 8) * 256 + data.charCodeAt( 9), // PM10  (CF=1)
                    'pm10':    data.charCodeAt(10) * 256 + data.charCodeAt(11), // PM1.0 (STD)
                    'pm25':    data.charCodeAt(12) * 256 + data.charCodeAt(13), // PM2.5 (STD)
                    'pm100':   data.charCodeAt(14) * 256 + data.charCodeAt(15), // PM10. (STD)
                    'gt03um':  data.charCodeAt(16) * 256 + data.charCodeAt(17), // > 0.3 um
                    'gt05um':  data.charCodeAt(18) * 256 + data.charCodeAt(19), // > 0.5 um
                    'gt10um':  data.charCodeAt(20) * 256 + data.charCodeAt(21), // > 1.0 um
                    'gt25um':  data.charCodeAt(22) * 256 + data.charCodeAt(23), // > 2.5 um
                    'gt50um':  data.charCodeAt(24) * 256 + data.charCodeAt(25), // > 5.0 um
                    'gt100um': data.charCodeAt(26) * 256 + data.charCodeAt(27)  // > 10 um
                };
            };
            led.plot(5, 5);
            basic.pause(100);
            led.unplot(5, 5);
        });

        led.plot(0, 5);
        basic.pause(100);
        led.unplot(0, 5);        
        return response;
    }

    //% block="init sensor at pin %p"
    export function psm5003InitSensor (p: SerialPin): void {
        serial.redirect(SerialPin.USB_TX, p, BaudRate.BaudRate9600);
        return;
    }
}