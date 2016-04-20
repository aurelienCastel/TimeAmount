const MILLISECOND = 0, SECOND = 1, MINUTE = 2, HOUR = 3, DAY = 4;

function TimeAmount(milliseconds, seconds, minutes, hours, days)
{
	this.units = [0, 0, 0, 0, 0];
	this.limits = [1000, 60, 60, 24, 1000000];

	this.milliseconds = milliseconds;
	this.seconds = seconds;
	this.minutes = minutes;
	this.hours = hours;
	this.days = days;

	this.setTo = function(milliseconds, seconds, minutes, hours, days)
	{
		this.milliseconds = milliseconds;
		this.seconds = seconds;
		this.minutes = minutes;
		this.hours = hours;
		this.days = days;
	};

	this.reset = function()
	{
		for(var i = 0; i < this.units.length; i++)
			this.units[i] = 0;
	};

	this.subtract = function(amount, unit)
	{
		if(amount == null || unit == null || amount % 1 != 0 || amount < 0 || unit < 0 || unit > this.units.length - 1)
		{
			console.warn("TimeAmount.subtract() function have been called with invalid parameters.\n" +
					     "First parameter have to be a positive integer.\n" +
						 "Second parameter have to be a valid index for units[].");
			return;
		}

		var remainder;

		for(var i = unit; i < this.units.length - 1 && amount > this.units[i]; i++)
		{
			remainder = amount % this.limits[i];

			if(remainder > this.units[i])
			{
				this.units[i] += this.limits[i];
				amount += this.limits[i];
			}

			this.units[i] -= remainder;
			amount -= remainder;
			amount /= this.limits[i];
		}
		if(amount <= this.units[i])
			this.units[i] -= amount;
		else
		{
			console.warn("In TimeAmount.subtract(), you tried to subtract an amount of time higher than what is contained in the object.\n" +
					     "Time units cannot goes under 0.");
			this.reset();
		}
	};

	this.add = function(amount, unit)
	{
		if(amount == null || unit == null || amount % 1 != 0 || amount < 0 || unit < 0 || unit > this.units.length - 1)
		{
			console.warn("TimeAmount.add() function have been called with invalid parameters.\n" +
					     "First parameter have to be a positive integer.\n" +
						 "Second parameter have to be a valid index for units[].");
			return;
		}

		var sum;

		for(var i = unit; i < this.units.length - 1 && amount > 0; i++)
		{
			this.units[i] += amount;
			amount = Math.floor(this.units[i] / this.limits[i]);
			this.units[i] %= this.limits[i];
		}
		sum = amount + this.units[i];
		if(sum < this.limits[i])
			this.units[i] = sum;
		else
		{
			console.warn("In TimeAmount.add(), you tried to add an amount of time higher than what can be contained by the object.\n" +
					     "Time units cannot goes beyond what is defined in limits[].");
			for(var i = 0; i < this.units.length; i++)
				this.units[i] = this.limits[i] - 1;
		}
	};
}

Object.defineProperty(TimeAmount.prototype, "milliseconds",
{
	get : function()
	{
		return this.units[MILLISECOND];
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
			this.units[MILLISECOND] = this.limits[MILLISECOND] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this.units[MILLISECOND] = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this.units[MILLISECOND] = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "seconds",
{
	get : function()
	{
		return this.units[SECOND];
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
			this.units[SECOND] = this.limits[SECOND] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this.units[SECOND] = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this.units[SECOND] = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "minutes",
{
	get : function()
	{
		return this.units[MINUTE];
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
			this.units[MINUTE] = this.limits[MINUTE] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this.units[MINUTE] = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this.units[MINUTE] = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "hours",
{
	get : function()
	{
		return this.units[HOUR];
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
			this.units[HOUR] = this.limits[HOUR] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this.units[HOUR] = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this.units[HOUR] = value;
	}
});

Object.defineProperty(TimeAmount.prototype, "days",
{
	get : function()
	{
		return this.units[DAY];
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
			this.units[DAY] = this.limits[DAY] - 1;
			console.warn("Time units cannot goes beyond what is defined in limits[].");
		}
		else if(value < 0)
		{
			this.units[DAY] = 0;
			console.warn("Time units cannot goes under 0.");
		}
		else
			this.units[DAY] = value;
	}
});
