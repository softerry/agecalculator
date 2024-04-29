// get ids of button, input and p from html
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("dob");
const resultEl = document.getElementById("result");

// create function to get user input and error message if input is empty
getUserInput = () =>{
    const dob = birthdayEl.value;
    if(dob === ""){
        alert ("Enter Your date of birthday");
    }else{
        const age = calculateAge(dob);
        resultEl.innerText = 'You are' + ' ' + age + ' ' + 'years old';
    }
}
// create function that minus the dob from the current year
calculateAge = (dob) =>{
    const currentDate = new Date();
    const birthdayDate = new Date(dob);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}
btnEl.addEventListener('click', getUserInput);
