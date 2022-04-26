namespace garragames {
    let pms5003SensorPin: DigitalPin;
    /**
     Returns the value of the PMS5003 sensor on a scale of 0 to 1000.
     */
    //% blockId=psm5003 weight=10 blockGap=22
    //% block="value of particle sensor at pin %p"
    export function psm5003Sensor(p: DigitalPin): void {
        let data = '';        
        serial.onDataReceived(String.fromCharCode(0x4d), () => {
            //basic.showString("READ");
            data = serial.readUntil(String.fromCharCode(0x42));
      
            // data = 'TEST';
            //let num = Math.randomRange(1, 100);
            let num = data.length;
            basic.showNumber(num, 200);
 
            led.plot(0, 0);
            basic.pause(100);
            led.unplot(0, 0);
        });

        led.plot(0, 5);
        basic.pause(100);
        led.unplot(0, 5);
        
        return;
    }

    //% block="init sensor at pin %p"
    export function psm5003InitSensor (p: SerialPin): void {
        serial.redirect(SerialPin.USB_TX, p, BaudRate.BaudRate9600);
        return;
    }
}