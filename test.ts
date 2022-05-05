garragames.pms5003InitSensor(SerialPin.P16)
basic.forever(function () {
    basic.showNumber(garragames.pms5003Sensor(Metric.Apm10))
    basic.pause(1000)
})