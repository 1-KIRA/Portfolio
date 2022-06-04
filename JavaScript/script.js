//JavaScript for Date & Time //

function display_date() 
	{
		document.getElementById("date").innerHTML = Date();
		setTimeout(display_date,1000)
		}

	display_date();