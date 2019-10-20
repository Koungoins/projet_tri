(function(){


	function chrono(){
		setTimeout(function(){	
			if(stopTr) {return;}		
			end = new Date();
			diff = end - start;
			diff = new Date(diff);
			let msec = diff.getMilliseconds();
			let sec = diff.getSeconds();
			let min = diff.getMinutes();
			let hr = diff.getHours()-1;
			if (min < 10){
			  min = "0" + min;
			}
			if (sec < 10){
			  sec = "0" + sec;
			}
			if(msec < 10){
			  msec = "00" +msec;
			}
			else if(msec < 100){
			  msec = "0" +msec;
			}
			document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec;
			if(chronoStart) {
				chrono();
			}
		}, 10)
	}

 
	/*

		TRI BULLE

	*/

	

	function forloop() {
		setTimeout(function(){
			if(stopTr) {return;}
			console.log(liste);
			console.log(lis);
			//HTML Suppression du style de selection
			for(let j=0; j<lis.length; j++){
				lis[j].classList.remove("animate-lft");
				lis[j].classList.remove("animate-rgt");
				lis[j].classList.remove("current_position");  
			}
			//curseur.classList.remove("simpleright");

			lis[i].classList.add("current_position"); 

			//on delay le chgt de nom
			//Changement de position dans le HTML, changment du contenu
			if(namechange) {
				lis[i-1].innerText = v1
				lis[i].innerText = v2
				namechange = false;
			}

			if(i<iMax){
			//lis[i].classList.add("current_position");  
				if(liste[i] > liste[i+1]){
					//Echange de position
					let tmp = liste[i];
					liste[i] = liste[i+1];
					liste[i+1] = tmp;
					//Il y a eu un changement
					changed = true;
					//On va inverser le contenu des items
					namechange = true;
					
					//HTML mise en évidence des selections
				 	lis[i].classList.add("animate-lft");
				 	lis[i+1].classList.add("animate-rgt");

					//on delaye le chgt de nom à la prochaine iteration
					v1 = liste[i];
					v2 = liste[i+1];
					//lis[i].innerText = liste[i];
					//lis[i+1].innerText = liste[i+1];

				}
				i++;
				//curseur.classList.add("simpleright");
				forloop();
			}
			else if(changed){
				i = 0;
				//optimisation tri
				lis[iMax].classList.add("triee");
				iMax--;
				changed = false;
				forloop();
			} else if(changed==false) {
				chronoStart =false;
				document.getElementById("fin").innerText="Aucun changement ce tour ci. Le tri est donc terminé."
			}
		
		}, 600)
	}


	
	let startTime = 0;
	let start = 0;
	let end = 0;
	let diff = 0;
	let timerID = 0;
	let chronoStart=true;
	let i = 0;
	let iMax = 0;
	let changed = false;
	let namechange = false;
	let v1, v2;	
	let liste = []
	let curseur = document.getElementById("curseur");
	let lis;
	let stopTr = false;


		
	function loadListe() {	
		let listForm = document.getElementById("formListe").getElementsByTagName("input");
		let ulListe = document.getElementById("tablist");
		lis = document.getElementById("tablist").getElementsByTagName("li");
		liste = [];
		ulListe.innerHTML=""	
		document.getElementById("fin").innerText = ""	
		//Récupération de la liste UL pour le traitement
		let valeur;
		 for (let a = 0; a<listForm.length; a++){
			valeur = listForm[a].value;
			liste.push(parseInt(valeur));
			let el = document.createElement("li");
			el.innerHTML = valeur;	
			ulListe.appendChild(el);
		}
		lis = document.getElementById("tablist").getElementsByTagName("li");
		
		//console.log(liste);
		//console.log(lis);	
	}
	
	document.getElementById('startButton').onclick = function startTri(){
		i = 0;		
		changed = false;
		namechange = false;
		start = new Date();
		stopTr = false;
		chronoStart = true;
		chrono();		
		loadListe();
		iMax = liste.length-1;
		forloop();
	}

	document.getElementById('stopButton').onclick = function stopTri(){		
		stopTr = true;
	}

})();

