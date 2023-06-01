"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var H_1 = require("./H");
// Test the start function
test('start', function () {
    expect((0, H_1.initApp)(200000, console.log)).toBe(true);
});
// Test with mock memory within the limit
test('mock memory ok', function () {
    var mockFn = jest.fn();
    (0, H_1.initApp)(200000, mockFn);
    expect(mockFn).toBeCalledWith("Rakendus käivitus");
});
// Test with mock memory below the limit
test('mock memory little', function () {
    var mockFn = jest.fn();
    var transporter = {}; // Create a mock transporter instance
    (0, H_1.initApp)(20000, mockFn, transporter); // Pass the transporter instance as the third argument
    expect(mockFn).toBeCalledWith("Vaba mälu ainult 20000");
    expect(mockFn).toBeCalledTimes(1);
});
// Test disk size within the limit
test('disk size ok', function () {
    var mockFn = jest.fn();
    (0, H_1.checkDiskSize)(1000000000, mockFn); // Adjust the disk size value as per your requirement
    expect(mockFn).not.toBeCalled();
});
// Test disk size below the limit
test('disk size little', function () {
    var mockFn = jest.fn();
    (0, H_1.checkDiskSize)(500000000, mockFn); // Adjust the disk size value as per your requirement
    expect(mockFn).toBeCalledWith("Low disk space: 500000000 bytes");
    expect(mockFn).toBeCalledTimes(1);
});
// Test disk size above the limit
test('disk size large', function () {
    var mockFn = jest.fn();
    (0, H_1.checkDiskSize)(2000000000, mockFn); // Adjust the disk size value as per your requirement
    expect(mockFn).not.toBeCalled();
});
// Function to execute when the application actually runs
function runApp() {
    var freeMemory = 200000; // Adjust the free memory value as per your requirement
    var diskSize = 1000000000; // Adjust the disk size value as per your requirement
    (0, H_1.checkDiskSize)(diskSize, H_1.sendLog);
    (0, H_1.initApp)(freeMemory, H_1.sendLog);
}
runApp();
