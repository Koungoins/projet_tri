(function(){


	let startTime = 0;
	let start = 0;
	let end = 0;
	let diff = 0;
	let timerID = 0;
	let chronoStart=true;
	// la fonction chronometre permet d'afficher le compteur chrono
	// ****************début de la fonction chronometre ******************
	function chrono(){
		setTimeout(function(){	
			if(stopTr) {return;}	// Si stop tri (stopTr) alors on arrête le chrono	
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
			// Il recupère l'élément HTML du chrono et affiche le chronometre sur la page
			document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec;
			//On rappel cette fonction si le chrono est toujours start (=vrai)
			if(chronoStart) {
				chrono();
			}
		}, 10)
	}
  

  function dynamicAnimation(pos) {
	//creer une animation dynamique pour l'élement à caser;

	let style = document.createElement('style');
	style.type = 'text/css';
	let keyFrames = '\
	.move_min  {\
	  animation: move 0.5s;\
	  animation-fill-mode: forwards;\
	}\
	  \
	@keyframes move {\
		0% {\
			transform: translateX(0px) translateY(0px);\
		}\
		20% {\
		  transform: translateX(0px) translateY(-25px);\
		}\
		60% {\
		  transform: translateX(DYNC_VAL) translateY(-25px);\
		}\
		100% {\
		  transform: translateX(DYNC_VAL) translateY(0px);\
		}\
	}\
	';
	style.innerHTML = keyFrames.replace(/DYNC_VAL/g, "-"+(pos*50)+"px");
	document.getElementsByTagName('head')[0].appendChild(style);

	return "move_min";
  }
 
  /*

	TRI INSERTION

  */

 


  function secondloop(){
	  return setTimeout(function(){
		if(stopTr) {return;}
		console.log("   j:"+j);
		if(j <= liste.length-1 ){
			if(j)
				lis[j].classList.add("current_position");
		  	if(  liste[j] < jMin ) {
				jMin = liste[j];
				jMinIndex = j;

				for(let k=0; k<lis.length; k++){
			  	lis[k].classList.remove("simpleright");
			  	lis[k].classList.remove("current_min"); 
				}
				lis[j].classList.add("current_min");
		  	}
		  	if (j !== 0){
				lis[j-1].classList.remove("current_position");
		  	}

		  	j++;

		  	secondloop();
		}
		else if(j === liste.length){
		  //le minimum a été trouve avant ce tour, on se laisse encore deux tour pour les anims et l'algo de tri
		  
		  //avant dernier tour de boucle, on fait les anims
		  //si jMinIndex = i pas besoin de le changer alors

		  console.log("ne doit apparaitre qu'une seul fois (i:"+i+")");
		  for(let k=i; k<jMinIndex; k++){
			lis[k].classList.add("simpleright"); 
		  }

		  const dyn = dynamicAnimation(Number(jMinIndex-i));

		  lis[jMinIndex].classList.add(""+dyn);


		  
		  j++;
		  secondloop();
		  //clear ici aussi pour plus de fluidité

		}
		else {
		  // dernier tour de boucle - x ms apreès l'avant dernier - on peut clear les animation
		  //on change le tableau et le html en même temps
		  //algo du tri select ici
		  const temp = liste[jMinIndex];
		  const htemptxt = lis[jMinIndex].innerText;
		  //console.log("H", htemp.innerText)
		  for(let v=jMinIndex; v>=i; v--){
			if(v === i){
			  liste[v] = temp;
			  lis[v].innerText = htemptxt;
			  //console.log("V", lis[v].innerText, "H2", htemp.innerText);
			}  
			else {
			  liste[v] = liste[v-1];
			  lis[v].innerText = lis[v-1].innerText;
			}
		  }

		  //on considère donc l'élèments comme trié
		  lis[i].classList.add("triee");

		  i++;
		  for(let k=0; k<lis.length; k++){
			lis[k].classList.remove("simpleright");
			lis[k].classList.remove("move_to_pos1");
			lis[k].classList.remove("move_min");
			lis[k].classList.remove("current_min");
			lis[k].classList.remove("current_position");
		  }

		  //on appele la prochaine i loop ici directement
		  	console.log("i:"+i);
			console.log(liste, lis);
			j=i;
			jMin = Number.POSITIVE_INFINITY;
			jMinIndex = -1;
			firstloop();
	
		}
		
	  }, 600)
  }

  function firstloop(){
	return setTimeout(function(){
	  if(stopTr) {return;}
	  if(i>=liste.length){
		chronoStart = false;
		//tri terminé
		console.log("tri terminé");
		document.getElementById("fin").innerText="Terminé";
		return;
	  }
	  
	  
	  for(let k=0; k<lis.length; k++){
		lis[k].classList.remove("simpleright");
		lis[k].classList.remove("move_to_pos1");
		lis[k].classList.remove("move_min");
		lis[k].classList.remove("current_min");
		lis[k].classList.remove("current_position");
	  }
	  
	  clearTimeout(stimeout);
	  stimeout = secondloop();

	  
	}, 100);
  }

	function loadListe() {	
		let listForm = document.getElementById("formListe").getElementsByTagName("input");
		let ulListe = document.getElementById("tablist");
		lis = document.getElementById("tablist").getElementsByTagName("li");
		liste = [];
		ulListe.innerHTML=""		
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
		
		console.log(liste);
		console.log(lis);	
	}

	let liste = []	
	let lis;
	let iTime = (liste.length) *1000;
	let jTime = 1 * 1000;
	let i = 0;
	let j = 0;  
	let jMin = Number.POSITIVE_INFINITY;
	let jMinIndex = -1;
  
	let ftimeout, stimeout;
  

	document.getElementById('startButton').onclick = function startTri(){
		console.log("dans start selection");
		i = 0;	
		j = 0;	
		start = new Date();
		stopTr = false;
		jMinIndex = -1;
		jMin = Number.POSITIVE_INFINITY;
		chronoStart = true;
		chrono();		
		loadListe();
		iTime = (liste.length) *1000;
		iMax = liste.length-1;
		ftimeout = firstloop();
	}

	document.getElementById('stopButton').onclick = function stopTri(){		
		stopTr = true;
	}
	
})();