const car = {
    make : 'Bugati',
    model : 'Chiron',
    year : 2016
};

//Function to display properties of the car
function displayProperties(){
    for(let property in car){
        console.log(car[property]);
    }
    // console.log(Object.values(car));
}

displayProperties();