// tests go here; this will not be compiled when this package is used as an extension.
garragames.psm5003InitSensor(SerialPin.P16)
basic.showString("APM 1.0")
basic.forever(function () {
    basic.showNumber(garragames.psm5003Sensor(Metric.apm10))
    basic.pause(1000)
})