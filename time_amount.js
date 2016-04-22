const MILLISECOND = 0, SECOND = 1, MINUTE = 2, HOUR = 3, DAY = 4;

function TimeAmount(milliseconds, seconds, minutes, hours, days)
{
	this.limits = [1000, 60, 60, 24, 1000000];

	this.milliseconds = 0;
	this.seconds = 0;
	this.minutes = 0;
	this.hours = 0;
	this.days = 0;

	this.setTo = function(milliseconds, seconds, minutes, hours, days)
	{
		this.milliseconds = milliseconds;
		this.seconds = seconds;
		this.minutes = minutes;
		this.hours = hours;
		this.days = days;
	};

	this.setToArray = function(array)
	{
		this.milliseconds = array[0];
		this.seconds = array[1];
		this.minutes = array[2];
		this.hours = array[3];
		this.days = array[4];
	};

	this.reset = function()
	{
		this.milliseconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.hours = 0;
		this.days = 0;
	};

	this.add = function(amount, unit)
	{
		var units = [this.milliseconds, this.seconds, this.minutes, this.hours, this.days];
		var sum;

		if(amount == null || unit == null || amount % 1 != 0 || amount < 0 || unit < 0 || unit >= units.length)
		{
			console.warn("TimeAmount.add() function have been called with invalid parameters.\n" +
					     "First parameter have to be a positive integer.\n" +
						 "Second parameter have to be a valid index to a time unit.");
			return;
		}


		for(var i = unit; i < units.length - 1 && amount > 0; i++)
		{
			units[i] += amount;
			amount = Math.floor(units[i] / this.limits[i]);
			units[i] %= this.limits[i];
		}
		sum = amount + units[i];
		if(sum < this.limits[i])
			units[i] = sum;
		else
		{
			console.warn("In TimeAmount.add(), you tried to add an amount of time higher than what can be contained by the object.\n" +
					     "Time units cannot goes beyond what is defined in limits[].");
			for(var i = 0; i < units.length; i++)
				units[i] = this.limits[i] - 1;
		}

		this.setToArray(units);
	};

	this.subtract = function(amount, unit)
	{
		var remainder;
		var units = [this.milliseconds, this.seconds, this.minutes, this.hours, this.days];

		if(amount == null || unit == null || amount % 1 != 0 || amount < 0 || unit < 0 || unit >= units.length)
		{
			console.warn("TimeAmount.subtract() function have been called with invalid parameters.\n" +
					     "First parameter have to be a positive integer.\n" +
						 "Second parameter have to be a valid index to a time unit.");
			return;
		}

		for(var i = unit; i < units.length - 1 && amount > units[i]; i++)
		{
			remainder = amount % this.limits[i];

			if(remainder > units[i])
			{
				units[i] += this.limits[i];
				amount += this.limits[i];
			}

			units[i] -= remainder;
			amount -= remainder;
			amount /= this.limits[i];
		}
		if(amount <= units[i])
		{
			units[i] -= amount;
			this.setToArray(units);
		}
		else
		{
			console.warn("In TimeAmount.subtract(), you tried to subtract an amount of time higher than what is contained in the object.\n" +
					     "Time units cannot goes under 0.");
			this.reset();
		}
	};

	this.setTo(milliseconds, seconds, minutes, hours, days);
}

Object.defineProperty(TimeAmount.prototype, "milliseconds",
{
	get: function()
	{
		return this._milliseconds;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
		{
			console.warn("Time units can only be set to integers."); 
			return;
		}

		if(value >= this.limits[MILLISECOND]) 
		{
			this._milliseconds = this.limits[MILLISECOND] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this._milliseconds = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this._milliseconds = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "seconds",
{
	get: function()
	{
		return this._seconds;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
		{
			console.warn("Time units can only be set to integers."); 
			return;
		}

		if(value >= this.limits[SECOND]) 
		{
			this._seconds = this.limits[SECOND] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this._seconds = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this._seconds = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "minutes",
{
	get: function()
	{
		return this._minutes;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
		{
			console.warn("Time units can only be set to integers."); 
			return;
		}
		if(value >= this.limits[MINUTE]) 
		{
			this._minutes = this.limits[MINUTE] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this._minutes = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this._minutes = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "hours",
{
	get: function()
	{
		return this._hours;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
		{
			console.warn("Time units can only be set to integers."); 
			return;
		}
		if(value >= this.limits[HOUR]) 
		{
			this._hours = this.limits[HOUR] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this._hours = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this._hours = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "days",
{
	get: function()
	{
		return this._days;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
		{
			console.warn("Time units can only be set to integers."); 
			return;
		}

		if(value >= this.limits[DAY]) 
		{
			this._days = this.limits[DAY] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this._days = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this._days = value;
	}
});
