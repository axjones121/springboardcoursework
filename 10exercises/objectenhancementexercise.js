//1
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//2

let favoriteNumber = 42

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "that is my favorite!"
}

//3

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "HI!"
    }
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//4
function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}


//code adapted by: http://curric.rithmschool.com/springboard/exercises/js-object-enhancements/solution/index.html