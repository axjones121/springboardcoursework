//1 

class Vechicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
//honk method

    honk(){
        return "Beep";
    }
//Each vehicle instance should have a method called toString

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }

}


//2
//super() copies the constructor
//extend copies the methods

class Car extends Vechicle {
    constructor(make, model, year) {
        super(make, model, year);

    //each car instance should have a property called numWheels which has a value of 4
        this.numWheels = 4
    }
}


//3 

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this. numWheels = 2
    }


//adding additional method to motorcycle class
revEngine(){
    return "VROOM!!!";
   }
}



//4

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }


add(newVehicle) {
    if(!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
    }
    if(this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
    }
    this.vehiicles.push(newVehicle);
    return "Vehicle added!";
  }
}



