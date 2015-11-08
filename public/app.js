function something()
	{
		var x = window.localStorage.getItem('bbb'); // ravnosilno x = hh['bbb']

		x = x * 1 + 1; // x = x + 1  // x * 1 preobrazovivaet tip string v int

		window.localStorage.setItem('bbb', x); // hh['bbb'] = x

		alert(x);
		
	}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var  x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
}

