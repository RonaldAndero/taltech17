import { initApp, checkDiskSize, sendLog } from "./H";

// Test the start function
test('start', () => {
    expect(initApp(200000, console.log)).toBe(true);
});

// Test with mock memory within the limit
test('start', () => {
    expect(() => {
        initApp(200000, console.log);
    }).not.toThrow();
});

// Test with mock memory below the limit
test('mock memory little', () => {
    const mockFn = jest.fn();
    initApp(20000, mockFn);
    expect(mockFn).toBeCalledWith("Vaba mälu ainult 20000");
    expect(mockFn).toBeCalledTimes(1);
});
// Test disk size within the limit
test('disk size ok', () => {
    const mockFn = jest.fn();
    checkDiskSize(1000000000, mockFn); // Adjust the disk size value as per your requirement
    expect(mockFn).not.toBeCalled();
});

// Test disk size below the limit
test('disk size little', () => {
    const mockFn = jest.fn();
    checkDiskSize(500000000, mockFn); // Adjust the disk size value as per your requirement
    expect(mockFn).toBeCalledWith("Low disk space: 500000000 bytes");
    expect(mockFn).toBeCalledTimes(1);
});

// Test disk size above the limit
test('disk size large', () => {
    const mockFn = jest.fn();
    checkDiskSize(2000000000, mockFn); // Adjust the disk size value as per your requirement
    expect(mockFn).not.toBeCalled();
});

// Function to execute when the application actually runs
function runApp() {
    const freeMemory = 200000; // Adjust the free memory value as per your requirement
    const diskSize = 1000000000; // Adjust the disk size value as per your requirement

    checkDiskSize(diskSize, sendLog);
    initApp(freeMemory, sendLog);
}

runApp();
