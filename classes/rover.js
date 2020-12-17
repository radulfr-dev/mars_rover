let orientationArray = ['N', 'E', 'S', 'W'];

function Rover(){

    let orientationIndex = 0;
    let yPosition = 0;

    function getPosition(){

        return `X:0 Y:${yPosition} Orientation:${orientationArray[orientationIndex]}`;
    }

    function enterCommand(commandString){
        for(let i = 0; i < commandString.length; i++){
            if(commandString[i] === 'L'){
                turnLeft();
            }
            if(commandString[i] === 'R'){
                turnRight();
            }
            if(commandString[i] === 'F'){
                yPosition++;
            }
        }
    }

    function turnLeft(){
        orientationIndex--;
        if(orientationIndex < 0){
            orientationIndex = orientationArray.length - 1;
        }
    }
    function turnRight(){
        orientationIndex++;
        if(orientationIndex >= orientationArray.length){
            orientationIndex = orientationArray.length - 1;
        }
    }

    return {getPosition, enterCommand}
}

module.exports = Rover;
