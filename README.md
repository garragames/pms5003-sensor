# PMS5003 Sensor Extension

## Digital universal Particulate Matter Sensor - PMS


> Open this page at [https://garragames.github.io/pms5003-sensor/](https://garragames.github.io/pms5003-sensor/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/garragames/pms5003-sensor** and import

## Edit this project ![Build status badge](https://github.com/garragames/pms5003-sensor/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/garragames/pms5003-sensor** and click import

## Blocks preview


This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://raw.githubusercontent.com/garragames/pms5003-sensor/master/blocks.png)

### Metrics

|Parameter | Metric           | Unit          | Diameter|
|----------|------------------|---------------|--------:|
|APM10     | PM1.0 CF=1       | micro g / m3  |    1.00 |
|APM25     | PM2.5 CF=1       | micro g / m3  |    2.50 |
|APM100    | PM10  CF=1       | micro g / m3  |   10.00 |
|PM10      | PM1.0            | micro g / m3  |    1.00 |
|PM25      | PM2.5            | micro g / m3  |    2.50 |
|PM100     | PM10             | micro g / m3  |   10.00 |
|GT03      | Particles > 0.3  | micron / 0.1L |    0.30 |       
|GT05      | Particles > 0.5  | micron / 0.1L |    0.50 |       
|GT10      | Particles > 1.0  | micron / 0.1L |    1.00 |       
|GT25      | Particles > 2.5  | micron / 0.1L |    2.50 |       
|GT50      | Particles > 5.0  | micron / 0.1L |    5.00 |       
|GT100     | Particles > 10.0 | micron / 0.1L |   10.00 |

> PM: Particulate Matter

### Sample code

#### Blocks

![A rendered view of the blocks](https://raw.githubusercontent.com/garragames/pms5003-sensor/master/test.png)

#### Javascript

```
// Test code
garragames.pms5003InitSensor(SerialPin.P16)
basic.forever(function () {
    basic.showNumber(garragames.pms5003Sensor(Metric.PM25))
    basic.pause(5000)
})

```

#### Metadata (used for search, rendering)

* for PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
