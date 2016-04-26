function display(timeAmount)
{
	var descriptionValues = "timeAmount : ";
	for(var i = 0; i < timeAmount.units.length; i++)
		descriptionValues += timeAmount.units[i].name + " = " + timeAmount.units[i].value + " | ";
	console.log(descriptionValues);
}

console.log("-----------------------------------------------------------------------------");
console.log("--------------------------------TimeAmount CONSTRUCTORS----------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount();");
var timeAmount = new TimeAmount();
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(1);");
var timeAmount = new TimeAmount(1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount('badType', 10.5, timeAmount, null, undefined);");
var timeAmount = new TimeAmount("badType", 10.5, timeAmount, null, undefined);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(5, undefined, undefined, 5);");
var timeAmount = new TimeAmount(5, undefined, undefined, 5);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(1000, 1000, 1000, 1000, 1000000);");
var timeAmount = new TimeAmount(1000, 1000, 1000, 1000, 1000000);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(-1, -1, -1, -1, -1);");
var timeAmount = new TimeAmount(-1, -1, -1, -1, -1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToCopy = new TimeAmount(5, 7, 3, 4, 0);");
console.log("var timeAmount= new TimeAmount(timeAmountToCopy);");
var timeAmountToCopy = new TimeAmount(5, 7, 3, 4, 0);
var timeAmount = new TimeAmount(timeAmountToCopy);
display(timeAmount);

console.log("timeAmountToCopy.units[0].value = 1;");
timeAmountToCopy.units[0].value = 1;
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("-----------------------------------TimeAmount setTo--------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo();");
timeAmount.setTo();
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo(1);");
timeAmount.setTo(1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo(5, undefined, undefined, 5);");
timeAmount.setTo(5, undefined, undefined, 5);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo('badType', 10.5, timeAmount, null, undefined);");
timeAmount.setTo('badType', 10.5, timeAmount, null, undefined);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo(1000, 1000, 1000, 1000, 1000000);");
timeAmount.setTo(1000, 1000, 1000, 1000, 1000000);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo(-1, -1, -1, -1, -1);");
timeAmount.setTo(-1, -1, -1, -1, -1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setTo(2, 3, 8, 6, 2);");
timeAmount.setTo(2, 3, 8, 6, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToCopy = new TimeAmount(7, 4, 4, 2, 1);");
console.log("timeAmount.setTo(timeAmountToCopy);");
var timeAmountToCopy = new TimeAmount(7, 4, 4, 2, 1);
timeAmount.setTo(timeAmountToCopy);
display(timeAmount);

console.log("timeAmountToCopy.units[0].value = 1;");
timeAmountToCopy.units[0].value = 1;
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("---------------------------------TimeAmount setToMin-------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setToMin();");
timeAmount.setToMin();
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("---------------------------------TimeAmount setToMax-------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setToMax();");
timeAmount.setToMax();
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("---------------------------------TimeAmount setUnitTo------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2)");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(1);");
timeAmount.setUnitTo(1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo('badInput');");
timeAmount.setUnitTo("badInput");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(1, 'badInput');");
timeAmount.setUnitTo(1, "badInput");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(null, 'seconds');");
timeAmount.setUnitTo(null, "seconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(-1, 'seconds');");
timeAmount.setUnitTo(-1, "seconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(1, 'milliseconds');");
timeAmount.setUnitTo(1, "milliseconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(1, 'minutes');");
timeAmount.setUnitTo(1, "minutes");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.setUnitTo(1, 'days');");
timeAmount.setUnitTo(1, "days");
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("-------------------------------------TimeAmount add--------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.add();");
timeAmount.add();
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.add(1);");
timeAmount.add(1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToAdd = new TimeAmount(5, 6, 10, 5, 3);");
console.log("timeAmount.add(timeAmountToAdd);");
var timeAmountToAdd = new TimeAmount(5, 6, 10, 5, 3);
timeAmount.add(timeAmountToAdd);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToAdd = new TimeAmount(1, 0, 0, 0, 0);");
console.log("timeAmount.add(timeAmountToAdd);");
var timeAmount = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToAdd = new TimeAmount(1, 0, 0, 0, 0);
timeAmount.add(timeAmountToAdd);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount();");
console.log("var timeAmountToAdd = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToAdd2 = new TimeAmount(0, 2, 2, 2, 1);");
console.log("var timeAmountToAdd3 = new TimeAmount(500, 10, 10, 5, 10);");
console.log("timeAmount.add(timeAmountToAdd, timeAmountToAdd2, timeAmountToAdd3);");
var timeAmount = new TimeAmount();
var timeAmountToAdd = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToAdd2 = new TimeAmount(0, 2, 2, 2, 1);
var timeAmountToAdd3 = new TimeAmount(500, 10, 10, 5, 10);
timeAmount.add(timeAmountToAdd, timeAmountToAdd2, timeAmountToAdd3);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 500000);");
console.log("var timeAmountToAdd = new TimeAmount(0, 0, 0, 0, 250000);");
console.log("var timeAmountToAdd2 = new TimeAmount(0, 0, 0, 0, 250000);");
console.log("timeAmount.add(timeAmountToAdd, timeAmountToAdd2);");
var timeAmount = new TimeAmount(0, 0, 0, 0, 500000);
var timeAmountToAdd = new TimeAmount(0, 0, 0, 0, 250000);
var timeAmountToAdd2 = new TimeAmount(0, 0, 0, 0, 250000);
timeAmount.add(timeAmountToAdd, timeAmountToAdd2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 1);");
console.log("timeAmount.add(1, 'miconds');");
var timeAmount = new TimeAmount(0, 0, 0, 0, 1);
timeAmount.add(1, "miconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.add(-1, 'milliseconds');");
timeAmount.add(-1, "milliseconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.add(1, 'milliseconds');");
timeAmount.add(1, "milliseconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.add(3500, 'milliseconds', 200, 'seconds');");
timeAmount.add(3500, "milliseconds", 200, "seconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 1);");
console.log("var timeAmountToAdd = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToAdd2 = new TimeAmount(0, 2, 2, 2, 1);");
console.log("var timeAmountToAdd3 = new TimeAmount(500, 10, 10, 5, 10);");
console.log("timeAmount.add(timeAmountToAdd, 3500, 'milliseconds'," +
	   		"timeAmountToAdd2, timeAmountToAdd3, 200, 'seconds');");
var timeAmount = new TimeAmount(0, 0, 0, 0, 1);
var timeAmountToAdd = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToAdd2 = new TimeAmount(0, 2, 2, 2, 1);
var timeAmountToAdd3 = new TimeAmount(500, 10, 10, 5, 10);
timeAmount.add(timeAmountToAdd, 3500, "milliseconds", timeAmountToAdd2, timeAmountToAdd3, 200, "seconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 1);");
console.log("var timeAmountToAdd = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToAdd2 = new TimeAmount(0, 2, 2, 2, 1);");
console.log("var timeAmountToAdd3 = new TimeAmount(500, 10, 10, 5, 10);");
console.log("var timeAmountToAdd4 = new TimeAmount(4, 5, 30, 5, 50);");
console.log("timeAmount.add(timeAmountToAdd, 3500, 'milliseconds', " +
	   		"5, timeAmountToAdd2, timeAmountToAdd3, 200, 'seconds', timeAmountToAdd4);");
var timeAmount = new TimeAmount(0, 0, 0, 0, 1);
var timeAmountToAdd = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToAdd2 = new TimeAmount(0, 2, 2, 2, 1);
var timeAmountToAdd3 = new TimeAmount(500, 10, 10, 5, 10);
var timeAmountToAdd4 = new TimeAmount(4, 5, 30, 5, 50);
timeAmount.add(timeAmountToAdd, 3500, "milliseconds", 5, timeAmountToAdd2,
				timeAmountToAdd3, 200, "seconds", timeAmountToAdd4);
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("----------------------------------TimeAmount subtract------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 3, 6, 8, 2);");
var timeAmount = new TimeAmount(2, 3, 6, 8, 2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.subtract();");
timeAmount.subtract();
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.subtract(1);");
timeAmount.subtract(1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToSubtract = new TimeAmount(2, 2, 5, 5, 1);");
console.log("timeAmount.subtract(timeAmountToSubtract);");
var timeAmountToSubtract = new TimeAmount(2, 2, 5, 5, 1);
timeAmount.subtract(timeAmountToSubtract);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 1);");
console.log("var timeAmountToSubtract = new TimeAmount(1, 0, 0, 0, 0);");
console.log("timeAmount.subtract(timeAmountToSubtract);");
var timeAmount = new TimeAmount(0, 0, 0, 0, 1);
var timeAmountToSubtract = new TimeAmount(1, 0, 0, 0, 0);
timeAmount.subtract(timeAmountToSubtract);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(999, 50, 50, 20, 100);");
console.log("var timeAmountToSubtract = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToSubtract2 = new TimeAmount(0, 2, 2, 2, 1);");
console.log("var timeAmountToSubtract3 = new TimeAmount(500, 10, 10, 5, 10);");
console.log("timeAmount.subtract(timeAmountToSubtract, timeAmountToSubtract2, timeAmountToSubtract3);");
var timeAmount = new TimeAmount(999, 50, 50, 20, 100);
var timeAmountToSubtract = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToSubtract2 = new TimeAmount(0, 2, 2, 2, 1);
var timeAmountToSubtract3 = new TimeAmount(500, 10, 10, 5, 10);
timeAmount.subtract(timeAmountToSubtract, timeAmountToSubtract2, timeAmountToSubtract3);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 500000);");
console.log("var timeAmountToSubtract = new TimeAmount(0, 0, 0, 0, 350000);");
console.log("var timeAmountToSubtract2 = new TimeAmount(0, 0, 0, 0, 250000);");
console.log("timeAmount.subtract(timeAmountToSubtract, timeAmountToSubtract2);");
var timeAmount = new TimeAmount(0, 0, 0, 0, 500000);
var timeAmountToSubtract = new TimeAmount(0, 0, 0, 0, 350000);
var timeAmountToSubtract2 = new TimeAmount(0, 0, 0, 0, 250000);
timeAmount.subtract(timeAmountToSubtract, timeAmountToSubtract2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 1);");
console.log("timeAmount.subtract(1, 'miconds');");
var timeAmount = new TimeAmount(0, 0, 0, 0, 1);
timeAmount.subtract(1, "miconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.subtract(-1, 'milliseconds');");
timeAmount.subtract(-1, "milliseconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.subtract(1, 'milliseconds');");
timeAmount.subtract(1, "milliseconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.subtract(3500, 'milliseconds', 200, 'seconds');");
timeAmount.subtract(3500, "milliseconds", 200, "seconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 50);");
console.log("var timeAmountToSubtract = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToSubtract2 = new TimeAmount(0, 2, 2, 2, 1);");
console.log("var timeAmountToSubtract3 = new TimeAmount(500, 10, 10, 5, 10);");
console.log("timeAmount.subtract(timeAmountToSubtract, 3500, 'milliseconds'," +
	   		"timeAmountToSubtract2, timeAmountToSubtract3, 200, 'seconds');");
var timeAmount = new TimeAmount(0, 0, 0, 0, 50);
var timeAmountToSubtract = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToSubtract2 = new TimeAmount(0, 2, 2, 2, 1);
var timeAmountToSubtract3 = new TimeAmount(500, 10, 10, 5, 10);
timeAmount.subtract(timeAmountToSubtract, 3500, "milliseconds", timeAmountToSubtract2, timeAmountToSubtract3, 200, "seconds");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(0, 0, 0, 0, 50);");
console.log("var timeAmountToSubtract = new TimeAmount(999, 59, 59, 23, 0);");
console.log("var timeAmountToSubtract2 = new TimeAmount(0, 2, 2, 2, 1);");
console.log("var timeAmountToSubtract3 = new TimeAmount(500, 10, 10, 5, 10);");
console.log("var timeAmountToSubtract4 = new TimeAmount(4, 5, 30, 5, 5);");
console.log("timeAmount.subtract(timeAmountToSubtract, 3500, 'milliseconds', " +
	   		"5, timeAmountToSubtract2, timeAmountToSubtract3, 200, 'seconds', timeAmountToSubtract4);");
var timeAmount = new TimeAmount(0, 0, 0, 0, 50);
var timeAmountToSubtract = new TimeAmount(999, 59, 59, 23, 0);
var timeAmountToSubtract2 = new TimeAmount(0, 2, 2, 2, 1);
var timeAmountToSubtract3 = new TimeAmount(500, 10, 10, 5, 10);
var timeAmountToSubtract4 = new TimeAmount(4, 5, 30, 5, 5);
timeAmount.subtract(timeAmountToSubtract, 3500, "milliseconds", 5, timeAmountToSubtract2,
				timeAmountToSubtract3, 200, "seconds", timeAmountToSubtract4);
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("--------------------------------TimeAmount multiplyBy------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 5, 6, 8, 3);");
var timeAmount = new TimeAmount(2, 5, 6, 8, 3);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.multiplyBy();");
timeAmount.multiplyBy();
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.multiplyBy('badInput');");
timeAmount.multiplyBy("badInput");
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.multiplyBy(null);");
timeAmount.multiplyBy(null);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.multiplyBy(1);");
timeAmount.multiplyBy(1);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.multiplyBy(2);");
timeAmount.multiplyBy(2);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("timeAmount.multiplyBy(5);");
timeAmount.multiplyBy(5);
display(timeAmount);

console.log("-----------------------------------------------------------------------------");
console.log("----------------------------------TimeAmount compare-------------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmount = new TimeAmount(2, 5, 6, 8, 3);");
var timeAmount = new TimeAmount(2, 5, 6, 8, 3);
display(timeAmount);
console.log("-----------------------------------------------------------------------------");

console.log("var result = timeAmount.compare();");
var result = timeAmount.compare();
console.log("result = " + result);
console.log("-----------------------------------------------------------------------------");

console.log("var result = timeAmount.compare(1);");
var result = timeAmount.compare(1);
console.log("result = " + result);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToCompare = new TimeAmount(3, 5, 6, 8, 3);");
console.log("var result = timeAmount.compare(timeAmountToCompare);");
var timeAmountToCompare =  new TimeAmount(3, 5, 6, 8, 3);
var result = timeAmount.compare(timeAmountToCompare);
console.log("result = " + result);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToCompare = new TimeAmount(1, 5, 6, 8, 3);");
console.log("var result = timeAmount(timeAmountToCompare);");
var timeAmountToCompare =  new TimeAmount(1, 5, 6, 8, 3);
var result = timeAmount.compare(timeAmountToCompare);
console.log("result = " + result);
console.log("-----------------------------------------------------------------------------");

console.log("var timeAmountToCompare = new TimeAmount(2, 5, 6, 8, 3);");
console.log("var result = timeAmount(timeAmountToCompare);");
var timeAmountToCompare =  new TimeAmount(2, 5, 6, 8, 3);
var result = timeAmount.compare(timeAmountToCompare);
console.log("result = " + result);
