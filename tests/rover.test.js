const Rover = require('../classes/rover.js');

test('getPosition returns "X:0 Y:0 Orientation:N" when no command entered', function(){
    let rover = new Rover();
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:N");
});
test('getPosition returns "X:0 Y:0 Orientation:W" when enterCommand("L") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("L");
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:W");
});
test('getPosition returns "X:0 Y:0 Orientation:S" when enterCommand("LL") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("LL");
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:S");
});
test('getPosition returns "X:0 Y:0 Orientation:E" when enterCommand("LLL") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("LLL");
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:E");
});
test('getPosition returns "X:0 Y:0 Orientation:E" when enterCommand("R") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("R");
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:E");
});
test('getPosition returns "X:0 Y:0 Orientation:S" when enterCommand("RR") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("RR");
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:S");
});
test('getPosition returns "X:0 Y:0 Orientation:W" when enterCommand("RRR") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("RRR");
    expect(rover.getPosition()).toBe("X:0 Y:0 Orientation:W");
});
test('getPosition returns "X:0 Y:1 Orientation:N" when enterCommand("F") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("F");
    expect(rover.getPosition()).toBe("X:0 Y:1 Orientation:N");
});
test('getPosition returns "X:0 Y:2 Orientation:N" when enterCommand("FF") has been run', function(){
    let rover = new Rover();
    rover.enterCommand("FF");
    expect(rover.getPosition()).toBe("X:0 Y:2 Orientation:N");
});
