function LimitedInt(limitMin , limitMax, name) // or () or (LimitedInt model to copy)
{
	this.value;
	this.limitMin = Number.MIN_SAFE_INTEGER;
	this.limitMax = Number.MAX_SAFE_INTEGER;
	this.name = "integer";

	if(arguments.length > 0)
	{
		if(arguments[0] instanceof LimitedInt)
		{
			this.limitMin = arguments[0].limitMin;
			this.limitMax = arguments[0].limitMax;
			this.name = arguments[0].name;
		}
		else
		{
			this.limitMin = limitMin;
			this.limitMax = limitMax;
			this.name = name;
		}
	}
}
Object.defineProperty(LimitedInt.prototype, "value",
{
	get: function()
	{
		return this._value;
	},
	set : function(value)
	{
		if(typeof value !== "number" || value % 1 != 0)
			console.warn("LimitedInt .value can only be set to integers, it will not be set."); 
		else if(value < this.limitMin) 
		{
			this._value = this.limitMin;
			console.warn("LimitedInt .value cannot goes under .limitMin, it will be set to : " +
						 this.limitMin);
		}
		else if(value > this.limitMax)
		{
			this._value = this.limitMax;
			console.warn("LimitedInt .value cannot goes beyond .limitMax, it will be set to: " +
						 this.limitMax);
		}
		else
			this._value = value;
	}
});
Object.defineProperty(LimitedInt.prototype, "limitMin",
{
	get: function()
	{
		return this._limitMin;
	},
	set : function(value)
	{
		if(typeof value !== "number" || value % 1 != 0)
			console.warn("LimitedInt .limitMin can only be set to integers, it will not be set."); 
		else if(value > this.limitMax) 
			console.warn("LimitedInt .limitMin cannot be higher than .limitMax : " +
						 this.limitMax + ", it will not be set.");
		else if(this.value != null && value > this.value)
			console.warn("LimitedInt .limitMin cannot be higher than .value : " +
						 this.value + ", it will not be set.");
		else
			this._limitMin = value;
	}
});
Object.defineProperty(LimitedInt.prototype, "limitMax",
{
	get: function()
	{
		return this._limitMax;
	},
	set : function(value)
	{
		if(typeof value !== "number" || value % 1 != 0)
			console.warn("LimitedInt .limitMax can only be set to integers, it will not be set."); 
		else if(value < this.limitMin) 
			console.warn("LimitedInt .limitMax cannot be lower than .limitMin : " +
						 this.limitMin + ", it will not be set.");
		else if(this.value != null && value < this.value)
			console.warn("LimitedInt .limitMax cannot be lower than .value : " +
						 this.value + ", it will not be set.");
		else
			this._limitMax = value;
	}
});
Object.defineProperty(LimitedInt.prototype, "name",
{
	get: function()
	{
		return this._name;
	},
	set : function(value)
	{
		if(typeof value !== "string")
			console.warn("LimitedInt .name can only be set to strings, it will not be set."); 
		else
			this._name = value;
	}
});

function TimeAmount() // or (TimeAmount to copy) or (smallestUnitValue, ..., biggestUnitValue)
{
	this.units = [new LimitedInt(0, 999, "milliseconds"), new LimitedInt(0, 59, "seconds"),
				  new LimitedInt(0, 59, "minutes"), new LimitedInt(0, 23, "hours"),
				  new LimitedInt(0, 999999, "days")];

	this.setToMin();
	this.setTo.apply(this, arguments);
}

TimeAmount.prototype.setTo = function() // (TimeAmount to copy) or (smallestUnitValue, ..., biggestUnitValue)
{
		if(arguments[0] instanceof TimeAmount)
		{
			for(var i = 0; i < arguments[0].units.length; i++)
				this.units[i].value = arguments[0].units[i].value;
		}
		else
		{
			for(var i = 0; i < arguments.length; i++)
				this.units[i].value = arguments[i];
		}
}
TimeAmount.prototype.setToMin = function()
{
	for(var i = 0; i < this.units.length; i++)
		this.units[i].value = this.units[i].limitMin;
}
TimeAmount.prototype.setToMax = function()
{
	for(var i = 0; i < this.units.length; i++)
		this.units[i].value = this.units[i].limitMax;
}
TimeAmount.prototype.setUnitTo = function(value, name)
{
	var pos = this.unitAmountPos(value, name);

	if(pos > -1)
		this.units[pos].value = value;
	else
	{
		console.warn("TimeAmount.setUnitTo() method have been called with invalids parameters.\n" +
					 "Parameters have to be an integer and a string that is the name of the unit to set.");
	}
}

TimeAmount.prototype.unitAmountPos = function(value, name)
{
	if(typeof value === "number" && value % 1 == 0 && value >= 0)
	{
		for(var i = 0; i < this.units.length; i++)
		{
			if(this.units[i].name === name)
				return i;
		}
	}
	return -1;
}

TimeAmount.prototype.add = function() // any combination in any order of TimeAmount and (amount, name)
{
	var addUnitAmount = function(units, amount, unitIndex)
	{
		for(var i = unitIndex; i < units.length; i++)
		{
			units[i].value += amount;
			if(units[i].value < units[i].limitMax)
				return units;
			amount = Math.floor(units[i].value / units[i].limitMax);
			units[i].value %= units[i].limitMax;
		}
		return -1;
	};

	var units = [];
	for(var i = 0; i < this.units.length; i++)
		units.push({value : this.units[i].value, limitMax : this.units[i].limitMax + 1});

	var pos;

	for(var i = 0; i < arguments.length; i++)
	{
		if(arguments[i] instanceof TimeAmount)
		{
			for(var j = 0; j < units.length; j++)
			{
				units = addUnitAmount(units, arguments[i].units[j].value, j);
				if(units === -1)
				{
					console.warn("In TimeAmount.add(), you tried to add an amount of time higher than what can be contained by the object.\n" +
								 "It will be set to its max value.");
					this.setToMax();
					return;
				}
			}
		}
		else if((pos = this.unitAmountPos(arguments[i], arguments[i + 1])) > -1)
		{
			units = addUnitAmount(units, arguments[i], pos);
			if(units === -1)
			{
				console.warn("In TimeAmount.add(), you tried to add an amount of time higher than what can be contained by the object.\n" +
							 "It will be set to its max value.");
				this.setToMax();
				return;
			}
			i++;
		}
		else
		{
			console.warn("TimeAmount.add() function have been called with an invalid parameter.\n" +
						 "Parameters can only be TimeAmount instances and/or (amount, name).");
		}
	}

	for(var i = 0; i < units.length; i++)
		this.units[i].value = units[i].value;
}

TimeAmount.prototype.subtract = function() // any combination in any order of TimeAmount and (amount, name)
{
	var subtractUnitAmount = function(units, amount, unitIndex)
	{
		for(var i = unitIndex; i < units.length; i++)
		{
			var remainder = amount % units[i].limitMax;

			if(remainder > units[i].value)
			{
				units[i].value += units[i].limitMax;
				amount += units[i].limitMax;
			}

			units[i].value -= remainder;
			amount -= remainder;
			amount /= units[i].limitMax;

			if(amount <= 0)
				return units;
		}
		return -1;
	}

	var units = [];
	for(var i = 0; i < this.units.length; i++)
		units.push({value : this.units[i].value, limitMax : this.units[i].limitMax + 1});

	var pos;

	for(var i = 0; i < arguments.length; i++)
	{
		if(arguments[i] instanceof TimeAmount)
		{
			for(var j = 0; j < units.length; j++)
			{
				units = subtractUnitAmount(units, arguments[i].units[j].value, j);
				if(units === -1)
				{
					console.warn("In TimeAmount.subtract(), you tried to subtract an amount of time higher than what was contained by the object.\n" +
								 "It will be set to its min value.");
					this.setToMin();
					return;
				}
			}
		}
		else if((pos = this.unitAmountPos(arguments[i], arguments[i + 1])) > -1)
		{
			units = subtractUnitAmount(units, arguments[i], pos);
			if(units === -1)
			{
				console.warn("In TimeAmount.subtract(), you tried to subtract an amount of time higher than what was contained by the object.\n" +
							 "It will be set to its min value.");
				this.setToMin();
				return;
			}
			i++;
		}
		else
		{
			console.warn("TimeAmount.subtract() function have been called with an invalid parameter.\n" +
						 "Parameters can only be TimeAmount instances and/or (amount, units).");
		}
	}

	for(var i = 0; i < units.length; i++)
		this.units[i].value = units[i].value;
}

TimeAmount.prototype.multiplyBy = function(positiveInt)
{
	var timeAmount = new TimeAmount(this);
	for(var i = 1; i < positiveInt; i++)
		this.add(timeAmount);
}

TimeAmount.prototype.compare = function(timeAmount)
{
	if(arguments[0] instanceof TimeAmount)
	{
		var difference;
		for(var i = this.units.length - 1; i >= 0; i--)
		{
			difference = this.units[i].value - timeAmount.units[i].value;
			if(difference)
				return difference;
		}
		return 0;
	}
	return null;
}

