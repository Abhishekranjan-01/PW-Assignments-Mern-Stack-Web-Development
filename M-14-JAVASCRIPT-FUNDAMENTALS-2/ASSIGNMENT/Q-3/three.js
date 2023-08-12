//Array of Students

const students = [
    
    {
        name : "Steve",
        marks : 95
    },
    {
        name : "Smith",
        marks : 75
    },
    {
        name: "Michel",
        marks : 92
    },
    {
        name : "Harry",
        marks : 70
    },
    {
        name: "Andrew",
        marks: 99
    }
];

students.forEach((item,index,array)=>{
    if(item.marks > 90){
        console.log(`Congratulations ${item.name} ! You have cleared the exam.`)
    }
});

