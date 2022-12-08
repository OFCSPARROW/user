function get(){
    let name=document.getElementById("t1").value;
    let age=document.getElementById("t2").value;
    let gender=document.getElementsByName("gender").value;
    let number=document.getElementById("t3").value
    let mail=document.getElementById("t4").value;
    let pass=document.getElementById("t5").value

    let arr=[];
    arr.push(name);
    arr.push(age);
    arr.push(gender);
    arr.push(number);
    arr.push(mail);
    arr.push(pass);

    let name1=document.getElementById("t1");
    name1.value ="";
    let age1=document.getElementById("t2");
    age1.value ="";
    let gender1=document.getElementsByName("gender");
    gender1.value ="";
    let number1=document.getElementById("t3");
    number1.value ="";
    let mail1=document.getElementById("t4");
    mail1.value ="";
    let pass1=document.getElementById("t5");
    pass1.value ="";
    console.log(arr);
}