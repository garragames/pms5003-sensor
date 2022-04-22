namespace garragames {
    let pms5003SensorPin: DigitalPin;
    /**
     Returns the value of the PMS5003 sensor on a scale of 0 to 1000.
     */
    //% blockId=psm5003 weight=10 blockGap=22
    //% block="value of particle sensor at pin %p"
    export function psm5003Sensor(p: SerialPin): void {
//        serial.onDataReceived(serial.delimiters(Delimiters.CarriageReturn), () => {
        let data = '';        
        serial.onDataReceived(String.fromCharCode(0x4d), () => {
            //basic.showString("READ");
            data = serial.readUntil(String.fromCharCode(0x42));

            console.log(data);
            basic.showString(data, 100);
            led.plot(0, 0);
            basic.pause(100);
            led.unplot(0, 0);
        });
        /*
        let out = 0;
        out = pins.digitalReadPin(p);
        //console.log(out);
        basic.showNumber(out);
        return out;

        */
        return;
    }

    //% block="init sensor at pin %p"
    export function psm5003InitSensor (p: SerialPin): void {
        serial.redirect(p, p, BaudRate.BaudRate115200);
        return;
    }
}