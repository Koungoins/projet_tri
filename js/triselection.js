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

  let i = 0;
  let changed = false;
  let namechange = false;
  let v1, v2;
  let iGrand=-1;
  let current;
  let cursMin=0;
	let hasMin = false;
	
	let inRecherche = false;
	//Recherche du plus grand que i depuis le début de la liste
	function rechercheMin(){
		//lis[cursMin].classList.remove("position_recherche"); 		
		setTimeout(function(){
		if(!inDecalage) {			
			if(cursMin<i){
				//lis[cursMin].classList.add("position_recherche"); 
				if(liste[cursMin]>liste[i]){
					iGrand = cursMin;		
					lis[iGrand].classList.add("position_grand"); 			
					console.log("Grand="+liste[cursMin]);
					inRecherche = false;
					cursDecal = i;
					changed = true;	
					inDecalage = true;					
					decalage();
				}			
										
				cursMin ++;			
				rechercheMin();
				//lis[cursMin].classList.remove("position_recherche"); 		
			}
			else {
				cursMin = 0;
				inRecherche=false;			
				console.log("Recherche plus");
				
				if(i<liste.length-1){
					//lis[i].classList.add("current_position");  
					/*if(liste[i] > liste[i+1]){
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

					}*/
					console.log("Continu");
					i++;
					//curseur.classList.add("simpleright");
					forloop();
				} else {
					document.getElementById("fin").innerText="Terminé";
				}			
			}
		}			
		}, 500)
	}
	
	let cursDecal = 0;
	//Decalage des éléments vers la droite
	let inDecalage = false;
	function decalage() {
		setTimeout(function(){
			if(cursDecal>iGrand) {
				console.log("Decalage="+liste[cursDecal-1]);
				liste[cursDecal]=liste[cursDecal-1];
				//lis[d].classList.add("animate-rgt");         
				console.log("d-1 : "+(cursDecal-1));
				if(cursDecal-1>=0){
					lis[cursDecal].innerText = lis[cursDecal-1].innerText	
					lis[cursDecal-1].innerText = "";					
				}							
				//console.log(cursDecal+">="+iGrand);
				cursDecal--;			
				decalage();				
			}			
			else {
				liste[iGrand] = current;
				lis[iGrand].innerText = current;	
				console.log("Apres decalage");
				console.log(liste);
				iGrand=-1;	
				inDecalage = false;
				cursMin ++;			
				rechercheMin();				
			}
			
		},500)
	}

	function removeStyle() {
		//HTML Suppression du style de selection
		  for(let j=0; j<lis.length; j++){
			lis[j].classList.remove("animate-lft");
			lis[j].classList.remove("animate-rgt");
			lis[j].classList.remove("current_position");  
			lis[j].classList.remove("position_grand");
		  }
	}

  function forloop() {
    setTimeout(function(){	
		if(!inRecherche && !inDecalage){
		  console.log(liste);
		  console.log(lis);
		  removeStyle();
		  current = liste[i]
		  //curseur.classList.remove("simpleright");
			lis[i].classList.add("current_position"); 
			cursMin=0;
			console.log("Ici ="+liste[i]);
			inRecherche = true;		
			rechercheMin();			
		}
	}, 500)
    
  }

  forloop();
  

})();