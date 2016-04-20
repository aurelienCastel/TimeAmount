console.log("-----------------------------------------------------------------------------");
console.log("--------------------------------------ENUM VALUES----------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("Enum values: millisecond = " + MILLISECOND.toString() + " | second = "  + SECOND.toString() + " | minute = "  +
			MINUTE.toString() + " | hour = "  + HOUR.toString() + " | day = "  + DAY.toString());

console.log("-----------------------------------------------------------------------------");
console.log("--------------------------------TimeAmount CONSTRUCTORS----------------------");
console.log("-----------------------------------------------------------------------------");


console.log("var timeAmount = new TimeAmount();");
var timeAmount = new TimeAmount();
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("var timeAmount = new TimeAmount(1);");
var timeAmount = new TimeAmount(100);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("var timeAmount = new TimeAmount(5, undefined, undefined, 5);");
var timeAmount = new TimeAmount(5, undefined, undefined, 5);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("var timeAmount = new TimeAmount('badType', 10.5, timeAmount, null, undefined);");
var timeAmount = new TimeAmount("badType", 10.5, timeAmount, null, undefined);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("var timeAmount = new TimeAmount(1000, 1000, 1000, 1000, 1000000);");
var timeAmount = new TimeAmount(1000, 1000, 1000, 1000, 1000000);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

var timeAmount = new TimeAmount(-1, -1, -1, -1, -1);
console.log("var timeAmount = new TimeAmount(-1, -1, -1, -1, -1);");
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------TimeAmount setTo--------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo();");
timeAmount.setTo();
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(1);");
timeAmount.setTo(1);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(5, undefined, undefined, 5);");
timeAmount.setTo(5, undefined, undefined, 5);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo('badType', 10.5, timeAmount, null, undefined);");
timeAmount.setTo('badType', 10.5, timeAmount, null, undefined);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(1000, 1000, 1000, 1000, 1000000);");
timeAmount.setTo(1000, 1000, 1000, 1000, 1000000);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(-1, -1, -1, -1, -1);");
timeAmount.setTo(-1, -1, -1, -1, -1);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());


console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------TimeAmount reset--------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.reset();");
timeAmount.reset();
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("-----------------------------------------------------------------------------");
console.log("----------------------------------TimeAmount subtract------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract();");
timeAmount.subtract();
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1);");
timeAmount.subtract(1);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1, -1);");
timeAmount.subtract(1, -1);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1, timeAmount.units.length);");
timeAmount.subtract(1, timeAmount.units.length);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(-1, MILLISECOND);");
timeAmount.subtract(-1, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1.5, MILLISECOND);");
timeAmount.subtract(1.5, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(0, MILLISECOND);");
timeAmount.subtract(0, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1, MILLISECOND);");
timeAmount.subtract(1, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(2, MILLISECOND);");
timeAmount.subtract(2, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1000, MILLISECOND);");
timeAmount.subtract(1000, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(10500, MILLISECOND);");
timeAmount.subtract(1500, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1000000000000000000, MILLISECOND);");
timeAmount.subtract(1000000000000000000, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1, SECOND);");
timeAmount.subtract(1, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(2, SECOND);");
timeAmount.subtract(2, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(60, SECOND);");
timeAmount.subtract(60, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(65, SECOND);");
timeAmount.subtract(65, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1000000000000000000, SECOND);");
timeAmount.subtract(1000000000000000000, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 0, 20);");
timeAmount.setTo(2, 3, 8, 0, 20);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1, HOUR);");
timeAmount.subtract(1, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(2, HOUR);");
timeAmount.subtract(2, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(60, HOUR);");
timeAmount.subtract(60, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(65, HOUR);");
timeAmount.subtract(65, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1000000000000000000, HOUR);");
timeAmount.subtract(1000000000000000000, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 0, 20);");
timeAmount.setTo(2, 3, 8, 0, 20);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1, DAY);");
timeAmount.subtract(1, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.subtract(1000000000000000000, DAY);");
timeAmount.subtract(1000000000000000000, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("-----------------------------------------------------------------------------");
console.log("-------------------------------------TimeAmount add--------------------------");
console.log("-----------------------------------------------------------------------------");


console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1);");
timeAmount.add(1);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, -1);");
timeAmount.add(1, -1);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, timeAmount.units.length);");
timeAmount.add(1, timeAmount.units.length);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(-1, MILLISECOND);");
timeAmount.add(-1, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1.5, MILLISECOND);");
timeAmount.add(1.5, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(0, MILLISECOND);");
timeAmount.add(0, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, MILLISECOND);");
timeAmount.add(1, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(997, MILLISECOND);");
timeAmount.add(997, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1000, MILLISECOND);");
timeAmount.add(1000, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1500, MILLISECOND);");
timeAmount.add(1500, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(10000000000000000, MILLISECOND);");
timeAmount.add(10000000000000000, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(0, SECOND);");
timeAmount.add(0, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, SECOND);");
timeAmount.add(1, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(997, SECOND);");
timeAmount.add(997, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1000, SECOND);");
timeAmount.add(1000, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1500, SECOND);");
timeAmount.add(1500, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(10000000000000000, SECOND);");
timeAmount.add(10000000000000000, SECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(0, HOUR);");
timeAmount.add(0, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, HOUR);");
timeAmount.add(1, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(17, HOUR);");
timeAmount.add(17, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1000, HOUR);");
timeAmount.add(1000, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1500, HOUR);");
timeAmount.add(1500, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(10000000000000000, HOUR);");
timeAmount.add(10000000000000000, HOUR);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(0, DAY);");
timeAmount.add(0, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, DAY);");
timeAmount.add(1, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(997, DAY);");
timeAmount.add(997, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1000, DAY);");
timeAmount.add(1000, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1500, DAY);");
timeAmount.add(1500, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(10000000000000000, DAY);");
timeAmount.add(10000000000000000, DAY);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.setTo(999, 59, 59, 23, 0);");
timeAmount.setTo(999, 59, 59, 23, 0);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());

console.log("timeAmount.add(1, MILLISECOND);");
timeAmount.add(1, MILLISECOND);
console.log("timeAmount: milliseconds = " + timeAmount.milliseconds.toString() + " | seconds = " +
			timeAmount.seconds.toString() + " | minutes = " + timeAmount.minutes.toString() + " | hours = " +
			timeAmount.hours.toString() + " | days = " + timeAmount.days.toString());
