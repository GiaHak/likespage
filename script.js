console.log("hi");

// create a function that onclick increments number of likes
//declare variable

    var count=9; 
    var count2=12;
    var count3=9;
    var query1= document.querySelector("#b1");
    var query2= document.querySelector("#b2");
    var query3= document.querySelector("#b3");

function like() {
    count++;
    query1.innerHTML = count + " Like(s)";
    console.log(count);
}

function like2() {
    count2++;
    query2.innerHTML = count2 + " Like(s)";
    console.log("count2: "+ count2);
}
function like3() {
    count3++;
    query3.innerHTML = count3 + " Like(s)";
    console.log("count3: "+ count3);
}
