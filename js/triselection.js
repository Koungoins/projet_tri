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
  let j = 0;

  let ftimeout, stimeout;

  let changed = false;
  let namechange = false;

  let current;


  function secondloop(){
      return setTimeout(function(){
        console.log("   j:"+j);
        if(j <= 3 ){
          
          for(let k=0; k<lis.length; k++){
            lis[k].classList.remove("simpleright");
            lis[k].classList.add("simpleright"); 
          }
          
          j++;

          secondloop();
        }
        
      }, 1000)
  }

  function firstloop(){
    return setTimeout(function(){
      
      clearTimeout(stimeout);
      stimeout = secondloop();
      
      console.log("i:"+i);
      i++;
      j=0;
      firstloop();
    }, 6000);
  }

  firstloop();
})();