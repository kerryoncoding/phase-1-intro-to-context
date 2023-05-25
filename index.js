// Your code here

function createEmployeeRecord(data){
   const dataObject = {
      firstName: data[0],
      familyName: data[1],
      title: data[2],
      payPerHour: data[3],
      timeInEvents: [],
      timeOutEvents: []
   }
   return dataObject
}

function createEmployeeRecords(arrayOfArrays){
   let newArray = []
   arrayOfArrays.forEach(element => {
      newArray.push(createEmployeeRecord(element))
   });
   return newArray
}

function createTimeInEvent(employeeRecord, dateStamp){
   //console.log(dateStamp)
   let dateStampObj = {
      type: "TimeIn",
      hour: Number(dateStamp.substr(11,14)),
      date: dateStamp.substr(0,10)
   }
   employeeRecord.timeInEvents =  [dateStampObj, ...employeeRecord.timeInEvents]
   return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
   let dateStampObj = {
      type: "TimeOut",
      hour: Number(dateStamp.substr(11,14)),
      date: dateStamp.substr(0,10)
   }
   employeeRecord.timeOutEvents =  [dateStampObj, ...employeeRecord.timeOutEvents]
   return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
   //use the date to find the correct object... then grab that object's time info
   for (let i = 0; i<employeeRecord.timeOutEvents.length; i++){
      if (employeeRecord.timeOutEvents[i].date === date){
         return((employeeRecord.timeOutEvents[i].hour - employeeRecord.timeInEvents[i].hour)/100)
      }
   }
}

function wagesEarnedOnDate(employeeRecord, date){
   return (employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, date))
}


function allWagesFor(employeeRecord){
   let totalWages = 0
   employeeRecord.timeInEvents.forEach(e =>{   
   totalWages = totalWages + (hoursWorkedOnDate(employeeRecord, e.date))
   })
   return (totalWages * employeeRecord.payPerHour)

}

function calculatePayroll(employeeRecordArray){
   let payroll = 0
   employeeRecordArray.forEach(e => {
      payroll = payroll + allWagesFor(e)
   })
   return payroll
}



