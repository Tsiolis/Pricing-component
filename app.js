const views = document.getElementById('views');
const cost = document.getElementById('cost');
const toggle = document.getElementById('toggle');
const slider = document.getElementById('slider');
const term = document.getElementById('term');

slider.addEventListener('input', function () {
	const val = slider.value;
	toggle.checked = false;
	
	if(val === '1'){
		views.innerHTML = '10K Pageviews';
		cost.innerHTML = '8/ ';
		term.innerHTML = 'month';
	}	if(val === '2'){
		views.innerHTML = '50K Pageviews';
		cost.innerHTML = '12/ ';
		term.innerHTML = 'month';
	}
	if(val === '3'){
		views.innerHTML = '100K Pageviews';
		cost.innerHTML = '16/ ';
		term.innerHTML = 'month';
	}
	if(val === '4'){
		views.innerHTML = '500K Pageviews';
		cost.innerHTML = '24/ ';
		term.innerHTML = 'month';
	}
	if(val === '5'){
		views.innerHTML = '1M Pageviews';
		cost.innerHTML =  '36/ ';
		term.innerHTML = 'month';
	}
}, false);

toggle.addEventListener('change', (e) =>{
	const val = slider.value;
	if(toggle.checked && val === '1'){
		cost.innerHTML =  '72/ ';
		term.innerHTML = 'year';
	} if(toggle.checked === false && val === '1'){
		cost.innerHTML = '8/ ';
		term.innerHTML = 'month';
	}	if(toggle.checked && val === '2'){
		cost.innerHTML =  '108/ ';
		term.innerHTML = 'year';
	} if(toggle.checked === false && val === '2'){
		cost.innerHTML = '12/ ';
		term.innerHTML = 'month';
	}	if(toggle.checked && val === '3'){
		cost.innerHTML =  '144/ ';
		term.innerHTML = 'year';
	} if(toggle.checked === false && val === '3'){
		cost.innerHTML = '16/ ';
		term.innerHTML = 'month';
	}	if(toggle.checked && val === '4'){
		cost.innerHTML =  '216/ ';
		term.innerHTML = 'year';
	} if(toggle.checked === false && val === '4'){
		cost.innerHTML = '24/ ';
		term.innerHTML = 'month';
	}	if(toggle.checked && val === '5'){
		cost.innerHTML =  '324/ ';
		term.innerHTML = 'year';
	} if(toggle.checked === false && val === '5'){
		cost.innerHTML = '36/ ';
		term.innerHTML = 'month';
	}
})

slider.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #10d5c2 0%, #10d5c2 " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100%)";
};
