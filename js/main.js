(function(){

	let windowFileProtocolChange = function(c){
		window.location.href = window.location.href.replace('index.html', c);
		console.log(window.location.href)
	}

	choix = function(){
		
		let slct = document.getElementsByName('tri')[0];
		let tri = slct.value;
		//console.log(tri, window.location);
		windowFileProtocolChange('pages/tri'+tri+'.html');


	}


})();