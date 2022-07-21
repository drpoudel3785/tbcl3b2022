function today() {
    d = new Date();
    day = d.getDay();
    date= d.getDate();
    month=d.getMonth();
    year=d.getFullYear();
    da = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    monthnames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    document.getElementById("today").innerHTML="Today is: "+da[day]+","+date+" "+monthnames[month]+" "+year; 
    
}
function closee() {
    con = confirm("Alright?");
    if (con == true) {
        window.close();
    }
    else {
        alert("Ok");
    }

}
monthnames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
function printall() {
    for (i = 0; i < monthnames.length; i++) {
        console.log(monthnames[i]);
    }
}