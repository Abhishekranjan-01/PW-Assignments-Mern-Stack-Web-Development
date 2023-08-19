const map =  new Map();

// Function To Add Values In Map
function add(name,age,email){
    this.set('Name',name);
    this.set('Age',age);
    this.set('Email',email); 

}

//Function To Update Values
function update(name=null,age=null,email=null){
    if(name != null){
        this.set('Name',name);
    }
    if(age != null){
        this.set('Age',age);
    }
    if(email != null){
        this.set('Email',email);
    }
}

//Function To Delete User Records
function deleteRecord(name=false,age=false,email=false){
    if(name != false){
        this.delete('Name');
    }
    if(age != false){
        this.delete('Age');
    }
    if(email != false){
        this.delete('Email');
    }
}



// Giving Values To Set In Map
add.call(map,'Steve',25,'Steve@gmail.com');

//Giving Values To Update Existing Record
update.call(map,'Steve Smith');//In This Example, I am Just Updating Name.

//Giving Values To Delete User Records

//Please Enter The Value in Following Format:- map,name,age,email
//put false in that format that you don't wish to change

deleteRecord.call(map,false,false,'email');//In This Example, I am Just deleting Email.

map.forEach((value,key,map)=> console.log(`${key} : ${value}`));
