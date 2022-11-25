// create your own resume data in Json format?
var resume = {
    "name" : "Tamilselvan",
    "Email_id" : "tamilselvans0103@gmail.com",
    "location" : "Krishnagiri",
    "Education" : ["B.E-Mecanicalengineering", "M.S-Logistics and Supply chain"],
    "Experience" : "2years",
    "Date_of_birth" : "01/03/1994",
    "Languvage" : ["English","Tamil"],
    "joinig_date" : "immediated joinner"
}
console.log(resume);

// Output;

// Object { name: "Tamilselvan", Email_id: "tamilselvans0103@gmail.com", location: "Krishnagiri", Education: (2) […], Experience: "2years", Date_of_birth: "01/03/1994", Languvage: (2) […], joinig_date: "immediated joinner" }
// ​
// Date_of_birth: "01/03/1994"
// ​
// Education: Array [ "B.E-Mecanicalengineering", "M.S-Logistics and Supply chain" ]
// ​
// Email_id: "tamilselvans0103@gmail.com"
// ​
// Experience: "2years"
// ​
// Languvage: Array [ "English", "Tamil" ]
// ​
// joinig_date: "immediated joinner"
// ​
// location: "Krishnagiri"
// ​
// name: "Tamilselvan"

// 2. For the given json iterate over all for loops(for, for in, for of, forEach)?

//for loop input

var arr=[
    {
         "name": "Tamil",
         "age": "28"
      },
    {
         "name": "Doe",
         "age": "21"
      },
     {
         "name": "ram",
         "age": "22"
      },
    {
         "name": "rupan",
         "age": "23"
    }
 ];
 for(var i=0;i<arr.length;i++){
    console.log(arr[i].name,arr[i].age);
 }
 // Output: 
//  Tamil 28
//  Doe 21
//  ram 22
//  rupan 23

// for in input
    var arr=[
        {
             "name": "Tamil",
             "age": "28"
          },
        {
             "name": "Doe",
             "age": "21"
          },
         {
             "name": "ram",
             "age": "22"
          },
        {
             "name": "rupan",
             "age": "23"
        }
    ]
for( var i in arr ){
    console.log(arr[i]);
}

// output
// {name: 'Tamil', age: '28'}
// {name: 'Doe', age: '21'}
// {name: 'ram', age: '22'}
// {name: 'rupan', age: '23'}


// for Off Input

    var arr=[
        {
             "name": "Tamil",
             "age": "28"
          },
        {
             "name": "Doe",
             "age": "21"
          },
         {
             "name": "ram",
             "age": "22"
          },
        {
             "name": "rupan",
             "age": "23"
        }
    ]
for( var i of arr ){
    console.log(i);
}

// output
// {name: 'Tamil', age: '28'}
// {name: 'Doe', age: '21'}
// {name: 'ram', age: '22'}
// {name: 'rupan', age: '23'}

// foreach Input

var a = ["red", "white", "blue", "green", "yellow"]
 a.forEach((b) => {
    console.log(b);
});

// output
// red
// white
// blue
// green
// yellow