function calculateAge(){
     let dob=document.getElementById("dob").value;
     if(dob===""){
        document.getElementById("result").innerHTML='Please select your date of birth!';
        return;
     }

    let dobDate=new Date(dob);
    let todayDate= new Date();
    let ageYear=todayDate.getFullYear()-dobDate.getFullYear();
    let ageMonth=todayDate.getMonth()-dobDate.getMonth();
    let  ageDays= todayDate.getDate()-dobDate.getDate();

     if (ageDays < 0){
        ageMonth--;
        ageDays+=new Date(todayDate.getFullYear(), todayDate.getMonth(),0).getDate();
    }
        if(ageMonth< 0){
            ageYear--;
            ageMonth+=12;
        }
    document.getElementById("result").innerText=`you are ${ageYear} years, ${ageMonth} months, and ${ageDays} days old🎉`;
    document.getElementById("dob").value=''; 

}