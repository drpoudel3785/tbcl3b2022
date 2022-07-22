function showDateTime(){
    const d=new Date();
    year=d.getFullYear();
    month=d.getMonth();
    day=d.getDate();
    hours=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();
    day=doubledigit(day);
    month=doubledigit(month);
    hours=doubledigit(hours);
    minutes=doubledigit(minutes);
    seconds=doubledigit(seconds);
    return (year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds);
}
function doubledigit(num){
    if(parseInt(num)<10){
        return "0"+num;
    }
    else{
        return num;
    }
}