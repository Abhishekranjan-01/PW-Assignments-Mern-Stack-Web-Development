const obj ={
    name : 'Steve',
    city : 'Sydney',
    Country : 'Australia'
};


//Fucntion To Check Property
function checkProperty(obj,propertyName){

AllProperties = Object.keys(obj);

if(AllProperties.includes(propertyName)){
    console.log(`${propertyName} Exists & It's Value is : ${obj[propertyName]}`);
}
else{
    console.log(`${propertyName} does not exists`);
}

}


//Calling Function To Check Property
checkProperty(obj,'Country');