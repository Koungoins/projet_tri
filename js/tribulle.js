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

    TRI BULLE

  */

  let i = 0;
  let changed = false;
  let namechange = false;
  let v1, v2;

  function forloop() {
    setTimeout(function(){
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

      // on delay le chgt de nom
      //Changement de position dans le HTML, changment du contenu
      if(namechange) {
        lis[i-1].innerText = v1
        lis[i].innerText = v2
        namechange = false;
      }

      if(i<liste.length-1){
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
        forloop();
        changed = false;
      } else if(changed==false) {
		  document.getElementById("fin").innerText="Aucun changement ce tour ci. Le tri est donc terminé."
	  }
	  
    }, 2000)
  }

  forloop();
  

})();