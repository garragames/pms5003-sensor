/**
 * PMS5003 Digital universal particle concentration sensor
 * 
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 * 
 * Beta version
 */

/**
 * Metrics names
 */
enum Metric {
    APM10  =  0, // PM1.0, CF=1 [micro g/m3]        | diameter:  1.00
    APM25  =  1, // PM2.5, CF=1 [micro g/m3]        | diameter:  2.50
    APM100 =  2, // PM10.  CF=1 [micro g/m3]        | diameter: 10.00
    PM10   =  4, // PM1.0 [micro g/m3]              | diameter:  1.00
    PM25   =  5, // PM2.5 [micro g/m3]              | diameter:  2.50
    PM100  =  6, // PM10. [micro g/m3]              | diameter: 10.00
    GT03   =  7, // Particles > 0.3 micron [/0.1L]  | diameter:  0.30
    GT05   =  8, // Particles > 0.5 micron [/0.1L]  | diameter:  0.50
    GT10   =  9, // Particles > 1.0 micron [/0.1L]  | diameter:  1.00
    GT25   = 10, // Particles > 2.5 micron [/0.1L]  | diameter:  2.50
    GT50   = 11, // Particles > 5.0 micron [/0.1L]  | diameter:  5.00
    GT100  = 12  // Particles > 10. micron [/0.1L]  | diameter: 10.00
}

/**
 * Buffer Size based in the specs for PMS5003
 * https://www.aqmd.gov/docs/default-source/aq-spec/resources-page/plantower-pms5003-manual_v2-3.pdf
 */
let BUFF_SIZE = 32
let Data = [BUFF_SIZE];
let buffer: Buffer = pins.createBuffer(BUFF_SIZE);

//% color=#FA8F13 icon="\uf124" group="Basic Blocks"
namespace garragames {
    /**
    Returns the value of the pms5003 particle sensor.
    */
    //% blockId=pms5003_1 weight=10 blockGap=22
    //% block="value of metric %p"
    //% weight=80
    export function pms5003Sensor(m: Metric): number {
        return Data[m];
    }

    /**
     Redirect the serial RX to an Digital pin
     */
    //% blockId=pms5003_2 weight=10 blockGap=22
    //% block="init sensor at pin %p"
    export function pms5003InitSensor(p: SerialPin): void {
        serial.redirect(SerialPin.USB_TX, p, BaudRate.BaudRate9600);
        return;
    }
}

/**
 * Update the Data
 */
basic.forever(function () {
    buffer = serial.readBuffer(BUFF_SIZE);

    Data[ 0] = buffer.getUint8( 4) * 255 + buffer.getUint8( 5);
    Data[ 1] = buffer.getUint8( 6) * 255 + buffer.getUint8( 7);
    Data[ 2] = buffer.getUint8( 8) * 255 + buffer.getUint8( 9);

    Data[ 3] = buffer.getUint8(10) * 255 + buffer.getUint8(11);
    Data[ 4] = buffer.getUint8(12) * 255 + buffer.getUint8(13);
    Data[ 5] = buffer.getUint8(14) * 255 + buffer.getUint8(15);

    Data[ 6] = buffer.getUint8(16) * 255 + buffer.getUint8(17);
    Data[ 7] = buffer.getUint8(18) * 255 + buffer.getUint8(19);
    Data[ 8] = buffer.getUint8(20) * 255 + buffer.getUint8(21);
    Data[ 9] = buffer.getUint8(22) * 255 + buffer.getUint8(23);
    Data[10] = buffer.getUint8(24) * 255 + buffer.getUint8(25);
    Data[11] = buffer.getUint8(26) * 255 + buffer.getUint8(27);

    Data[12] = buffer.getUint8(28) * 255 + buffer.getUint8(29); // Reserved_0 [???] | diameter: nan
    Data[13] = buffer.getUint8(30) * 255 + buffer.getUint8(31); // Reserved_0 [???] | diameter: nan
});
