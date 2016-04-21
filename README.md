# TimeAmount.js

A library to help you represent and manipulate amount of times, cut into different units.

---

    var timeAmount = new TimeAmount(0, 10, 30, 5, 2);
Will create a new amount of time that is 0 milliseconds, 10 seconds, 30 minutes, 5 hours and 2 days long.

    var timeAmount = new TimeAmount(1000, 60, 60, 24, 1000000);
Will create a new amount of time that is 999 milliseconds, 59 seconds, 59 minutes, 23 hours and 999999 days long.
	
    var timeAmount2 = new TimeAmount(-1, -1, -1, -1, -1);

Will create a new amount of time that is 0 milliseconds, 0 seconds, 0 minutes, 0 hours and 0 days long.

**Time units cannot goes beyond a certain limit and cannot goes under 0.**

 - TimeAmount.millisecond : from 0 to 999
 - TimeAmount.second : from 0 to 59
 - TimeAmount.minute : from 0 to 59
 - TimeAmount.hour : from 0 to 23
 - TimeAmount.day : from 0 to 999999

---
	timeAmount.setTo(50, 50, 50, 20, 10);
Will set timeAmount to 50 milliseconds, 50 seconds, 50 minutes, 20 hours and 10 days.

---
	timeAmount.reset();
Will set timeAmount to 0 milliseconds, 0 seconds, 0 minutes, 0 hours and 0 days.

---
	timeAmout.add(1, MILLISECOND);
Will add 1 millisecond to the amount of time contained by timeAmount. <br>
If timeAmount is - ml : 999 | s : 59 |m : 59 | h : 23 | d : 0 - <br>
It will logically become - ml : 0 | s : 0 |m : 0 | h : 0 | d : 1 -

	timeAmount.add(amount, UNIT)
To call the `.add()` method:

 -  The first argument is a positive integer
 -  The second argument is the unit you want to add typed in UPPERCASE
 
 ---
	timeAmout.subtract(1, MILLISECOND);
Will subtract 1 millisecond to the amount of time contained by timeAmount. <br>
If timeAmount is - ml : 0 | s : 0 |m : 0 | h : 0 | d : 1 - <br>
It will logically become - ml : 999 | s : 59 |m : 59 | h : 23 | d : 0 -

	timeAmount.subtract(amount, UNIT)
To call the `.subtract()` method:

 -  The first argument is a positive integer
 -  The second argument is the unit you want to subtract typed in UPPERCASE

---
	timeAmount.second = timeAmount.minute;
You can GET the time units contained by timeAmount by simply accessing them with the `.`  . <br>
You can SET the time units contained by timeAmount by simply assigning with the `=`  . <br>
Don't  forget, **Time units cannot goes beyond a certain limit and cannot goes under 0.**

