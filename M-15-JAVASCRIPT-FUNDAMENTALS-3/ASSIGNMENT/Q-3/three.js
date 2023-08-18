const obj ={
    name : 'Steve',
    city : 'Sydney',
    Country : 'Australia'
};

function ShowNumberOfProperties(obj){
    const keys=Object.keys(obj);
    console.log(`There Are ${keys.length} Properties, In This Object.`);
}

ShowNumberOfProperties(obj);