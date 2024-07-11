function checkSpeed() {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let speed = parseFloat(prompt("Enter the speed of the car (km/h):"))
    
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


checkSpeed();
