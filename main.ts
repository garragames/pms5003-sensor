/**
 * Metrics names
 */
enum Metric {
    apm10  =  0,
    apm25  =  1,
    apm100 =  2,
    pm10   =  4,
    pm25   =  5,
    pm100  =  6,
    gt03   =  7,
    gt05   =  8,
    gt10   =  9,
    gt25   = 10,
    gt50   = 11,
    gt100  = 12
}

/**
 * Buffer Size based in the specs for PMS5003
 * https://www.aqmd.gov/docs/default-source/aq-spec/resources-page/plantower-pms5003-manual_v2-3.pdf
 */
let BUFF_SIZE = 32

let Data = [BUFF_SIZE];

let buffer: Buffer = pins.createBuffer(BUFF_SIZE);

//% color=#FAA613 icon="\uf122"
namespace garragames {
    /**
    Returns the value of the PSM5003 particle sensor
    */
    //% blockId=psm5003 weight=10 blockGap=22
    //% block="value of metric %p"
    export function psm5003Sensor(p: Metric): number {
        return Data[p];
    }

    //% block="init sensor at pin %p"
    export function psm5003InitSensor(p: SerialPin): void {
        serial.redirect(SerialPin.USB_TX, p, BaudRate.BaudRate9600);
        return;
    }
}

/**
 * Update the Data
 */
basic.forever(function () {
    buffer = serial.readBuffer(BUFF_SIZE);

    Data[ 0] = buffer.getUint8( 4) * 255 + buffer.getUint8( 5); // PM1.0, CF=1 [micro g/m3]        | diameter:  1.00
    Data[ 1] = buffer.getUint8( 6) * 255 + buffer.getUint8( 7); // PM2.5, CF=1 [micro g/m3]        | diameter:  2.50
    Data[ 2] = buffer.getUint8( 8) * 255 + buffer.getUint8( 9); // PM10.  CF=1 [micro g/m3]        | diameter: 10.00

    Data[ 3] = buffer.getUint8(10) * 255 + buffer.getUint8(11); // PM1.0 [micro g/m3]              | diameter:  1.00
    Data[ 4] = buffer.getUint8(12) * 255 + buffer.getUint8(13); // PM2.5 [micro g/m3]              | diameter:  2.50
    Data[ 5] = buffer.getUint8(14) * 255 + buffer.getUint8(15); // PM10. [micro g/m3]              | diameter: 10.00

    Data[ 6] = buffer.getUint8(16) * 255 + buffer.getUint8(17); // Particles > 0.3 micron [/0.1L]  | diameter:  0.30
    Data[ 7] = buffer.getUint8(18) * 255 + buffer.getUint8(19); // Particles > 0.5 micron [/0.1L]  | diameter:  0.50
    Data[ 8] = buffer.getUint8(20) * 255 + buffer.getUint8(21); // Particles > 1.0 micron [/0.1L]  | diameter:  1.00
    Data[ 9] = buffer.getUint8(22) * 255 + buffer.getUint8(23); // Particles > 2.5 micron [/0.1L]  | diameter:  2.50
    Data[10] = buffer.getUint8(24) * 255 + buffer.getUint8(25); // Particles > 5.0 micron [/0.1L]  | diameter:  5.00
    Data[11] = buffer.getUint8(26) * 255 + buffer.getUint8(27); // Particles > 10. micron [/0.1L]  | diameter: 10.00

    Data[12] = buffer.getUint8(28) * 255 + buffer.getUint8(29); // Reserved_0 [???]                | diameter: nan
    Data[13] = buffer.getUint8(30) * 255 + buffer.getUint8(31); // Reserved_0 [???]                | diameter: nan
});
