namespace garragames {
    let apm10 = 255;

    const enum Metric {
        apm10 = 0,
        apm25 = 1,
        apm100 = 2
    }
    
    /**
     Returns the value of the PMS5003 sensor on a scale of 0 to 1000.
     */
    //% blockId=psm5003 weight=10 blockGap=22
    //% block="value of particle sensor at pin %p"
    export function psm5003Sensor(p: DigitalPin): void {

    }

    /**
    Returns the value of the moisture sensor on a scale of 0 to 100.
    */
    //% blockId=psm5003B weight=10 blockGap=22
    //% block="value of metric %m"
    export function psm5003Sensor2(m: Metric): number {
        return apm10;
    }

    //% block="init sensor at pin %p"
    export function psm5003InitSensor(p: SerialPin): void {
        serial.redirect(SerialPin.USB_TX, p, BaudRate.BaudRate9600);
        return;
    }
}