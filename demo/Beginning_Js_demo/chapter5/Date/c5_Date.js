function dateDemo() {
    var dateStr = window.prompt("please input the current date", "September 25, 2017 00:00:00");
    docwrite("The original Date you input is: ");
    docwrite(dateStr);
    var dateObj = new Date(dateStr);
    var dateInput = dateObj.getDate();
    var dateNew = dateInput + 10;
    dateObj.setDate(dateNew);
    var newDateStr = dateObj.toDateString();
    docwrite("The 10 days after the date you input is:");
    docwrite(newDateStr);
}