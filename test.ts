// tests go here; this will not be compiled when this package is used as an extension.

let particles = 0;
while (true) {
    garragames.psm5003Sensor(16);
    basic.showNumber(particles, 150);
    basic.pause(1000);
}