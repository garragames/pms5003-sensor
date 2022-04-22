namespace garragames {
    let pms5003SensorPin: AnalogPin;
    /**
     Returns the value of the PMS5003 sensor on a scale of 0 to 100.
     */
    //% blockId=octopus_moisture weight=10 blockGap=22
    //% block="value of moisture sensor at pin %p"
    export function MoistureSensor(p: AnalogPin): number {
        return pins.map(pins.analogReadPin(p), 0, 950, 0, 100);
    }
}