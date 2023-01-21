// Your code here
function createEmployeeRecord(array) {
    const object = {firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],};
    return(object)
}; 
function createEmployeeRecords(array) {
    const arrayOfObjects = []
    for (let i=0; i<array.length; i++) {   
    arrayOfObjects.push(createEmployeeRecord(array[i]))
    } 
    return arrayOfObjects
}
function createTimeInEvent(object, dateStamp) {
    const hourString = dateStamp.substr(11,14)
    const dateString = dateStamp.substr(0,10)
    const timeInObject = {
        type: "TimeIn",
        hour: parseInt(hourString),
        date: dateString,
    }
    object.timeInEvents.push(timeInObject)
    return object
}
function createTimeOutEvent(object, dateStamp) {
    const hourString = dateStamp.substr(11,14)
    const dateString = dateStamp.substr(0,10)
    const timeOutObject = {
        type: "TimeOut",
        hour: parseInt(hourString),
        date: dateString,
    }
    object.timeOutEvents.push(timeOutObject)
    return object
        }
function hoursWorkedOnDate(object, dateStamp) {
    if (object.timeInEvents[0].date == dateStamp && object.timeOutEvents[0].date == dateStamp) {
        const hourIn = object.timeInEvents[0].hour
        const hourOut = object.timeOutEvents[0].hour
        const hoursWorked = (hourOut - hourIn)/100
        return hoursWorked
    } 
}

function wagesEarnedOnDate(object, dateStamp) {
    const payRate = object.payPerHour
    const hoursWorked = hoursWorkedOnDate(object,dateStamp)
    const wagesEarned = hoursWorked*payRate
    return wagesEarned
}
        
function allWagesFor(object) {
    const allWagesArray =[]
    for (let i=0; i<object.timeInEvents.length; i++) {
        const hourIn = object.timeInEvents[i].hour
        const hourOut = object.timeOutEvents[i].hour
        const hoursWorked = (hourOut - hourIn)/100
        const payRate = object.payPerHour
        const dayWages = hoursWorked*payRate
        allWagesArray.push(dayWages)
    }
    const initialValue = 0;
    const allWagesSum = allWagesArray.reduce(
(accumulator, currentValue) => accumulator + currentValue, initialValue);
    return allWagesSum
}

function calculatePayroll(array) {
    const errybodyWagesArray = []
    for (let i=0; i<array.length; i++) {
        const OneWages = allWagesFor(array[i])
        errybodyWagesArray.push(OneWages)
    }
    const initialValue = 0;
    const errybodyWagesSum = errybodyWagesArray.reduce(
(accumulator, currentValue) => accumulator + currentValue, initialValue);
    return errybodyWagesSum
}    