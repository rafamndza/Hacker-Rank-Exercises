/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/


  function timeConversion(s) {

    let lastTwo = s.substring(8); // AM or PM
    
    let fullTime = s.substring(0, 8); // "00:00"00"
    
    let times = fullTime.split(':'); // ["00","00","00"]
    
    if(lastTwo === "PM") {
        if(times[0] !== "12") {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        if(times[0] === "12") {
            times[0] = "00";
        }
    }
    
    return times.join(':');
}


