(function(){
	
  let liste = [8, 2, 7, 6, 1, 3, 5, 4, 9]
  let curseur = document.getElementById("curseur");
  let lis = document.getElementById("tablist").getElementsByTagName("li");
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
      for(let j=0; j<lis.length; j++){
        lis[j].classList.remove("animate-lft");
        lis[j].classList.remove("animate-rgt");
      }
      curseur.classList.remove("simpleright");


      // on delay le chgt de nom
      if(namechange) {
        lis[i-1].innerText = v1 
        lis[i].innerText = v2
        namechange = false;
      }

      if(i<liste.length-1){

        if(liste[i] > liste[i+1]){
          let tmp = liste[i];
          liste[i] = liste[i+1];
          liste[i+1] = tmp;
          changed = true;
          namechange = true;
          
          //HTML
          lis[i].classList.add("animate-lft");
          lis[i+1].classList.add("animate-rgt");

          //on delaye le chgt de nom à la prochaine iteration
          v1 = liste[i];
          v2 = liste[i+1];
          //lis[i].innerText = liste[i];
          //lis[i+1].innerText = liste[i+1];

        }
        i++;
        curseur.classList.add("simpleright");
        forloop();
      }
      else if(changed){
        i = 0;
        forloop();
        changed = false;
      }
    }, 2000)
  }

  forloop();

})();