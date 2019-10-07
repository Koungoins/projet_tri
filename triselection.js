(function(){
	
  let liste = [7, 2, 8, 6, 1, 3, 5, 4, 9]
  
  function tri_selection(l){
  	/* à implementer 
    		en prenant comple le html pour animer la fonction
        donc prevoir aussi des temps de pause à chaque "action"
       	*/
        
        
  }
  
  function printCounter() {
    console.log(counter);
    counter++;
    if (counter < 10)
        setTimeout(printCounter, 1000);
	}
  
  function tri_bulle(l){
  	/* à implementer 
    		en prenant comple le html pour animer la fonction
        donc prevoir aussi des temps de pause à chaque "action"
       	*/
        	
          /*
          	HTML pure 
           	*/
          let curseur = document.getElementById("curseur");
        	
        
        	let changed;
          let counter = 0;
   				do{
        		changed = false;
        		for(let i=0; i < l.length-1; i++) {
            	
            	if(l[i] > l[i+1]) {
                let tmp = l[i];
                l[i] = l[i+1];
                l[i+1] = tmp;
                changed = true;
            	}
              curseur.classList.add("simpleright");
              let e = printCounter();
              curseur.classList.remove("simpleright");
        		}
    			} while(changed);  
  }
  
  
  tri_bulle(liste);
  
})();
