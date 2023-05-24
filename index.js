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
   for (let i=0; i<arrayOfArrays.length; i++){
      newArray.push(createEmployeeRecord(arrayOfArrays[i]))
   }
   return newArray
}

function createTimeInEvent(employeeRecord, dateStamp){
   let dateStampObj = [{
      type: "TimeIn",
      hour: Number(dateStamp.substr(11,14)),
      date: dateStamp.substr(0,10)
   }]
   employeeRecord.timeInEvents = dateStampObj
   return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
   let dateStampObj = [{
      type: "TimeOut",
      hour: Number(dateStamp.substr(11,14)),
      date: dateStamp.substr(0,10)
   }]
   employeeRecord.timeOutEvents = dateStampObj
   return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
   //use the date to find the correct object... then grab that object's time info
   for (let i = 0; i<employeeRecord.timeOutEvents.length; i++){
      if (employeeRecord.timeOutEvents[i].date = date){
         return((employeeRecord.timeOutEvents[i].hour - employeeRecord.timeInEvents[i].hour)/100)
      }
   }
}

function wagesEarnedOnDate(employeeRecord, date){
   return (employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, date))
}


function allWagesFor(employeeRecord){
   //console.log((employeeRecord))
   employeeRecord.foreach(e => console.log(e))
   //console.log(wagesEarnedOnDate(employeeRecord))

}

function calculatePayroll(employeeRecordArray){
   //console.log(employeeRecordArray)
   let initialValue = 0
   const sumValue = employeeRecordArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) 
   return sumValue
}

/// should return to this later... didn't use map or reduce... need to think about it.

