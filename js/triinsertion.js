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
  let iMini=0;
  let current;

  function forloop() {
    setTimeout(function(){
      console.log(liste);
      console.log(lis);
      //HTML Suppression du style de selection
      for(let j=0; j<lis.length; j++){
        lis[j].classList.remove("animate-lft");
        lis[j].classList.remove("animate-rgt");
        lis[j].classList.remove("current_position");  
        lis[j].classList.remove("position_grand");
      }
	    current = liste[i]
      //curseur.classList.remove("simpleright");

		  lis[i].classList.add("current_position"); 

      //Recherche du plus petit que i depuis le i+1 de la liste
      console.log("Ici ="+liste[i]);
      iMini = i;
      for(let a=i; a<liste.length; a++) {						
        if(liste[a]<liste[iMini]){
          iMini = a;										
        }
      }
		
		
      if(iMini>=0) {
        lis[iMini].classList.add("position_grand"); 			
        console.log("Petit="+liste[iMini]+" que ="+liste[i]);
        console.log("Avant échange");
        console.log(liste);
        //Echange de place
        let tmp = liste[i];
        liste[i] = liste[iMini];
        liste[iMini] = tmp;
        
        
        lis[i].innerText = lis[iMini].innerText;
        lis[iMini].innerText = tmp;
        
        
        console.log("Apres échange");
        console.log(liste);
        iMini=-1;
      }
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
        i++;
        
        forloop();
      }
      else if(changed){
        i = 0;
        forloop();
        changed = false;
      } else if(changed==false) {
		  document.getElementById("fin").innerText="Terminé"
	  }
	}, 2000)
    
  }

  forloop();
  

})();