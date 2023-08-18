const student = {
    name : 'Steve',
    age : '24',
    grade : 'A',
    
};

function updateGrade(updatedGrade){
    this.grade = updatedGrade;
}

//Grade To Be Update:-

updateGrade.call(student,'A++');

console.log(student.grade); //OUTPUT:- A++