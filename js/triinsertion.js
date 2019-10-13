(function(){
	
	
	let liste = []
	let curseur = document.getElementById("curseur");
	let lis = document.getElementById("tablist").getElementsByTagName("li");
	
	//Récupération de la liste UL pour le traitement
	 for (let i = 0;i<lis.length;i++){
		liste.push(parseInt(lis[i].innerText));
	}
	
	console.log(liste);
	console.log(lis);
 
 
 
	/*

		TRI INSERTION

	*/

	let i = 1;
	let j = 0;

	let stimeout;
	let iTemp = -1;
	let current;

	function secondloop(){
		return setTimeout(function(){
			console.log("   j:"+j);
			if(j >=0 && liste[j] > iTemp){
				liste[j+1] = liste[j];
				j--;
				secondloop();
			} else if( j === -1 || liste[j] <= iTemp) {
				liste[j+1] = iTemp;
				i++;
			}
		}, 600)
	}
  
	function firstloop(){
	  return setTimeout(function(){
		
		if(i >= liste.length){
			//terminé
			console.log('terminé');
			console.log(liste);
			return;
		}

		console.log(liste);
		
		iTemp = liste[i];
		j = i-1;

		console.log('i:', i, " iTemp:", iTemp);

		clearTimeout(stimeout);
		stimeout = secondloop();
		
		
		firstloop();
	  }, (liste.length+1)*600);
	}
  
	firstloop();
	

})();