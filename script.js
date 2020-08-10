
console.log("hello");
var x = document.getElementById('gsft_main').contentWindow.document.getElementById('incident.opened_at').value;
var origYear = x.slice(0,4);
var origMonth = x.slice(5,7)
var origDay = x.slice(8,10);
var origHour =  x.slice(11,13);
var origMinute = x.slice(14,16);
var origSecond = x.slice(17,19);
console.log(origSecond);
var mydate = new Date(Date.UTC(origYear, origMonth, origDay, origHour, origMinute, origSecond));

// ET timezone offset in hours.
var timezone = 7;
// Timezone offset in minutes + the desired offset in minutes, converted to ms.
// This offset should be the same for ALL date calculations, so you should only need to calculate it once.
var offset = (mydate.getTimezoneOffset() + (timezone * 60)) * 60 * 1000;

// Use the timestamp and offset as necessary to calculate min/sec etc, i.e. for countdowns.
var timestamp = mydate.getTime() + offset,
    seconds = Math.floor(timestamp / 1000) % 60,
    minutes = Math.floor(timestamp / 1000 / 60) % 60,
    hours   = Math.floor(timestamp / 1000 / 60 / 60);

// Or update the timestamp to reflect the timezone offset.
mydate.setTime(mydate.getTime() + offset);
// Then Output dates and times using the normal methods.
var date = mydate.getDate(),
    hour = mydate.getHours();


console.log(mydate);
var date = mydate.getFullYear() + '-' + (mydate.getMonth()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + '-' + 
(mydate.getDate()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ' ' + 
(mydate.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + 
(mydate.getMinutes()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + 
(mydate.getSeconds()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});   
console.log(date);
document.getElementById('gsft_main').contentWindow.document.getElementById('incident.opened_at').value = date;

