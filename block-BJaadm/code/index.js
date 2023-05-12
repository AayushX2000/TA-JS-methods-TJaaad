let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName=[];
persons.forEach((ele)=>{
  peopelName.push(ele.name);
})
console.log(peopelName);


// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=[];
persons.forEach((ele)=>{
  peopleGrade.push(ele.grade);
})
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=[];
persons.forEach((ele)=>{
  peopleSex.push(ele.sex);
})
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
  peopelName.filter((ele)=>{
    return ele.startsWith("J") || ele.startsWith("P");
  })

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopelName.forEach((ele)=>{
 if( ele.startsWith("A") || ele.startsWith("C")){
  console.log(ele.length)
}
})
// Log all the filtered male ('M') in persons array
persons.forEach((ele)=>{
  if(ele.sex==="M"){
    console.log(ele.name)
  }
})

// Log all the filtered female ('F') in persons array
persons.forEach((ele)=>{
  if(ele.sex==="F"){
    console.log(ele.name)
  }
})


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
  
persons.filter((ele)=>{
  if(ele.sex==="F"){
    return (ele.name.startsWith("C")||ele.name.startsWith("J"))
  }
})
// Log all the even numbers from peopleGrade array
   peopleGrade.forEach((ele)=>{
     if(ele%2==0){
      console.log(ele)
     }
   })
// Find the first name that starts with 'J' in persons array and log the object


// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons=[];
  persons.forEach((ele)=>{
    if(ele.sex==="F"){
    femalePersons.push(ele)
    }
  })
  console.log(femalePersons)

// Filter all the male from persons array and store in malePersons array
  let malePersons=[];
  persons.forEach((ele)=>{
    if(ele.sex==="M"){
    malePersons.push(ele)
    }
  })
  console.log(malePersons)

// Find the sum of all grades and store in gradeTotalr
let gradeTotalr=0;
persons.forEach((ele)=>{
   gradeTotalr=gradeTotalr+ele.grade
})
console.log(gradeTotalr);

// Find the average grade
let avg=0;
persons.forEach((ele)=>{

  avg=avg+ele.grade
})
console.log(avg/persons.length)


// Find the average grade of male
let avgM=0;
persons.forEach((ele)=>{
  if(ele.sex==="M"){
    avgM=avgM+ele.grade
  }
})
console.log(avgM/persons.length)

// Find the average grade of female
let avgF=0;
persons.forEach((ele)=>{
  if(ele.sex==="F"){
    avgM=avgF+ele.grade
  }
})
console.log(avgF/persons.length)
// Find the highest grade
let highest=0;
persons.forEach((ele)=>{
  if(ele.grade>highest){
    highest=ele.grade;
  }
 
})
console.log(highest);

// Find the highest grade in male
let maleHigh=0;
persons.forEach((ele)=>{
  if(ele.sex==="M"&&ele.grade>maleHigh){
     maleHigh=ele.grade
  }
})
console.log(maleHigh);


// Find the highest grade in female
let femHigh=0;
persons.forEach((ele)=>{
  if(ele.sex==="F"&&ele.grade>femHigh){
     femHigh=ele.grade
  }
})
console.log(femHigh);


// Find the highest grade for people whose name starts with 'J' or 'P'
   let allHigh=0;
   persons.forEach((ele)=>{
  if(ele.name.startsWith("J")==ele.grade>allHigh&&ele.name.startsWith("J")&&ele.grade>allHigh){
    allHigh=ele.grade
  }
    
   })
    console.log(allHigh);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

let ascend=function (a,b){
  return a-b
}
 peopleGrade= peopleGrade.sort(ascend)
  console.log(peopleGrade)

// Sort the peopleGrade in descending order
function descendSorted(a,b){
  return b-a
}
 peopleGrade= peopleGrade.sort(descendSorted)
  console.log(peopleGrade)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
 peopleGrade=[...peopleGrade].sort(descendSorted)

// Sort the array peopelName in ascending `ABCD..Za....z`
let charAscend=function (a,b){
  return a-b
}
peopelName=peopelName.sort(charAscend);
console.log(peopelName)
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let sorte=[...peopelName].sort(charAscend);
