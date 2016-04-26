# TimeAmount.js

A library to help you represent and manipulate amounts of times, cut into differents units.

---

    var timeAmount = new TimeAmount();
Create a new amount of time that is represented by milliseconds, seconds, minutes, hours and days. <br>
All these time units have undefined values.

    var timeAmount = new TimeAmount(0, 10, 30, 5, 2);
Create a new amount of time that is 0 milliseconds, 10 seconds, 30 minutes, 5 hours and 2 days long.

    var timeAmount = new TimeAmount(1000, 60, 60, 24, 1000000);
Create a new amount of time that is 999 milliseconds, 59 seconds, 59 minutes, 23 hours and 999999 days long.
	
    var timeAmount = new TimeAmount(-1, -1, -1, -1, -1);
Create a new amount of time that is 0 milliseconds, 0 seconds, 0 minutes, 0 hours and 0 days long.

	var timeAmount = new TimeAmount(timeAmountToCopy);
Create a new amount of time with the same numbers of milliseconds, seconds, minutes, hours and days as timeAmountToCopy.


**Time units cannot goes beyond a certain limit and cannot goes under 0.**

 - TimeAmount.millisecond : from 0 to 999
 - TimeAmount.second : from 0 to 59
 - TimeAmount.minute : from 0 to 59
 - TimeAmount.hour : from 0 to 23
 - TimeAmount.day : from 0 to 999999

---
	timeAmount.setTo(50, 50, 50, 20, 10);
Set timeAmount to 50 milliseconds, 50 seconds, 50 minutes, 20 hours and 10 days.

	timeAmount.setTo(timeAmountToCopy);
Set timAmount to the same numbers of milliseconds, seconds, minutes, hours and days as timeAmountToCopy.

---
	timeAmount.setToMin();
Set timeAmount to 0 milliseconds, 0 seconds, 0 minutes, 0 hours and 0 days.

---
	timeAmount.setToMax();
Set timeAmount to 999 milliseconds, 59 seconds, 59 minutes, 23 hours and 999999 days.

---
	timeAmout.setUnitTo(1, "milliseconds");
Set the number of milliseconds to 1.

---
	timeAmount.add(1, "milliseconds");
Add 1 milliseconds to the total amount of time in timeAmount. <br>
If timeAmount is - ml : 999 | s : 59 |m : 59 | h : 23 | d : 0 - <br>
It will logically become - ml : 0 | s : 0 |m : 0 | h : 0 | d : 1 -

	timeAmount.add(100, "seconds", 20 "days");
You can add several units in the same function call.

	timeAmount.add(timeAmountToAdd);
Add the amount of time in timeAmountToAdd to timeAmount.

	timeAmount.add(timeAmountToAdd, 500, "minutes", timeAmountToAdd2, ...);
You can mix TimeAmount instances and amount, unit pairs in the same function call.

---
	timeAmount.subtract(1, "milliseconds");
Subtract 1 milliseconds to the total amount of time in timeAmount. <br>
If timeAmount is - ml : 0 | s : 0 |m : 0 | h : 0 | d : 1 - <br>
It will logically become - ml : 999 | s : 59 |m : 59 | h : 23 | d : 0 -

	timeAmount.subtract(100, "seconds", 20 "days");
You can subtract several unit in the same function call.

	timeAmount.subtract(timeAmountToSubtract);
Subtract the amount of time in timeAmountToAdd to timeAmount.

	timeAmount.subtract(timeAmountToSubtract, 500, "minutes", timeAmountToSubtract2, ...);
You can mix TimeAmount instances and amount, unit pairs in the same function call.

---
	timeAmount.multiplyBy(2);
Multiply the amount of time in timeAmount by 2.

---
	timeAmount.compare(timeAmountToCompare);
Return a positive integer if timeAmount is greater than timeAmountToCompare. <br>
Return a negative integer if timeAmount is lower than timeAmountToCompare. <br>
Return a 0 if timeAmount is equal to timeAmountToCompare. <br>
