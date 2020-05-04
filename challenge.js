
document.getElementById('no-more-challenges').style.display="none";

let provocare = document.getElementById('text-challenge');
var form = document.getElementById("test");

//prin apasarea butonului 'Finalizeaza' evitam reincarcarea paginii
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//Intrebari si raspunsuri pentru provocari

let questions = [[

{title:'Morometii'},
{author:'Marin Preda'},

{
	q:'1. Volumul I al romanului "Morometii" a fost scris in anul ...',
	a:'1955'
},
{
	q:'2. Prenumele celui mai mic baiat al lui Ilie Moromete este ...' ,
	a:'Niculae'
},
{
	q:'3. Duminica barbatii discutau despre politica in poiana lui ...',
	a:'Iocan'
},
{
	q:'4. Volumul I al romanului "Morometii" a fost scris in anul ...',
	a:'1967'
},
{
	q:'5. Sotia lui Ilie Moromete se numea ... Moromete',
	a:'Catrina'
},
{
	q:'6. Formula de salut a lui Cocosila: "Esti ..."',
	a:'Prost'
},
{
	q:'7. Dimineata Victor Balosu nu obisnuia sa bea ...',
	a:'Tuica'
},
{
	q:'8. Numele personajului care se casatoreste cu Polina Balosu este ...',
	a:'Birica'
}
],

[

{title:'Lord of The Rings 1'},
{author:'J. R. R. Tolkien'},

{
	q:'1. Prenumele unchiului lui Frodo Baggins este ...',
	a:'Bilbo'
},
{
	q:'2. Cartea in care il regasim pe unchiului lui Frodo Baggins se numeste ...' ,
	a:'Hobbitul'
},
{
	q:'3. Fratia Inelului are ... membri (numar)',
	a:'9'
},
{
	q:'4. Boromir este ucis de ...',
	a:'Orci'
},
{
	q:'5.Frodo si Samwise pleaca in ...',
	a:'Mordor'
},
{
	q:'6. Urmatorul citat:"Raul prinde puteri in Mordor.Inelul s-a trezit la viata.A auzit chemarea stapanului sau." ii apartine lui ... ',
	a:'Gandalf'
},
{
	q:'7. Cei 4 hobbiti se intalnesc cu Aragorn la hanul " ... in doua picioare"',
	a:'Poneiul'
},
{
	q:'8. Porecla lui Aragorn era " ... mare"',
	a:'Pas'
}
],

[

{title:'Baltagul'},
{author:'Mihail Sadoveanu'},

{
	q:'1. Fiul lui Nechifor Lipan se numeste ...',
	a:'Gheorghita'
},
{
	q:'2. Balada din care este selectat motto-ul romanului se numeste ... ' ,
	a:'Miorita'
},
{
	q:'3. Plecand in calatorie, Vitoria o lasa pe Minodora la Manastrirea ... ',
	a:'Varatic'
},
{
	q:'4. Nechifor Lipan cumparase de la Vatra Dornei ... de oi (numar)',
	a:'300'
},
{
	q:'5. Familia Lipan locuieste in Magura ... ',
	a:'Tarcaului'
},
{
	q:'6. Vitoria si fiul ei intalnesc o nunta in localitatea ... ',
	a:'Cruci'
},
{
	q:'7. Numele parintelui caruia Vitoria ii cere sfatul la Manastirea Bistrita este ... ',
	a:'Visarion'
},
{
	q:'8. Vrajitoarea la care se duce Vitoria Lipan este "Baba ... "',
	a:'Maranda'
}
],

[

{title:'Ratiune si Simtire'},
{author:'Jane Austen'},

{
	q:'1. Cele doua protagoniste sunt Elinor si ...',
	a:'Marianne'
},
{
	q:'2. Familia cumnatei celor doua surori se numeste ...' ,
	a:'Ferrars'
},
{
	q:'3. Familia Dashwood se muta in ... Cottage',
	a:'Barton'
},
{
	q:'4. Marianne se indragosteste de ...',
	a:'Willoughby'
},
{
	q:'5. Logodnica lui Edward se numeste ...',
	a:'Lucy'
},
{
	q:'6. Marianne se marita cu Colonelul ...',
	a:'Brandon'
},
{
	q:'7. Sora cea mica se numeste ...',
	a:'Margaret'
},
{
	q:'8. Numarul romanelor scrise de Jane Austen este egal cu ...',
	a:'6'
}
],

[

{title:'Good Omens'},
{author:'Neil Gaiman, Terry Pratchett'},

{
	q:'1. Crowley este un ...',
	a:'Demon'
},
{
	q:'2. Aziraphale este ...' ,
	a:'Inger'
},
{
	q:'3. Cele doua lucruri care ii plac lui Azirphale sunt cartile si ...',
	a:'Mancarea'
},
{
	q:'4. Descendenta vrajitoarei se numeste ... Device',
	a:'Anathema'
},
{
	q:'5. Numele cainelui iadului este ...',
	a:'Caine'
},
{
	q:'6. Anticristul este Adam ...',
	a:'Young'
},
{
	q:'7. Poluarea,Razboiul,Foametea si Moartea sunt ... apocalipsei',
	a:'Cavalerii'
},
{
	q:'8. Lui Crowley ii plac ...',
	a:'Plantele'
}
]

]



let alegere;
//este ales un numar random si sunt afisate autorul si numele cartii care apartin provocarii corespunzatoare acelui numar
alegere=Math.floor(Math.random() * questions.length);
document.getElementById('book-title').innerHTML='Carte: "'+ questions[alegere][0].title+'"';
document.getElementById('book-author').innerHTML='Autor: '+ questions[alegere][1].author;

//sunt incarcate intrebarile 
function showQ(){
	var quests = [];
	for(let i=0;i<8;i++)
	{
		quests[i] = document.getElementsByClassName('lab')[i];	
		quests[i].innerHTML=questions[alegere][i+2].q;
		quests[i].style.fontSize = "18px";
		quests[i].style.padding = "2px";
		quests[i].style.color = "#007DD8";

	}}

// Daca este apasat butonul 'ACCEPT'
	function acceptChallenge()
	{
		document.getElementById('accept-challenge').style.display="none";
		document.getElementById('body-content').style.display="block";
		document.getElementById('book-title').innerHTML=questions[alegere][0].title;
		document.getElementById('book-author').innerHTML=questions[alegere][1].author;
		for(let i=0;i<8;i++)
		{
			document.getElementsByClassName('answers')[i+1].innerHTML= questions[alegere][i+2].q + ": " + "(" + questions[alegere][i+2].a+")";
		}
		provocare.innerHTML='Provocare: "'+ questions[alegere][0].title+ '" de ' + questions[alegere][1].author;
		showQ();
	}

//Daca este apasat butonul 'REFUZ'

	function anotherChallenge()
	{
		if(questions.length===1) document.getElementById('no-more-challenges').style.display='block';
		else{
			questions.splice(alegere,1);
			alegere=Math.floor(Math.random() * questions.length);
			document.getElementById('book-title').innerHTML='Carte: "'+ questions[alegere][0].title+'"';
			document.getElementById('book-author').innerHTML='Autor: '+ questions[alegere][1].author;
			showQ();
		}
	}




//Este afisat rezultatul in functie de scor
	function resChallenge(score){
		document.getElementById('body-content').style.display="none";
		document.getElementById('result').style.display="flex";
		document.getElementById('scor').innerHTML='Scorul tau: '+score+'/8';
		if(score<=5) {document.getElementById('rezultat').innerHTML="Din pacate nu ai obtinut nimic la aceasta provocare!"; document.getElementById('medalie-img').src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Antu_face-sad.svg/1024px-Antu_face-sad.svg.png";
		document.getElementById('answers-container').style.display="block";
	}

	else if(score===6){document.getElementById('rezultat').innerHTML="Felicitari!Ai obtinut medalia de bronz!"; document.getElementById('medalie-img').src="Media/bronze.png";
	document.getElementById('answers-container').style.display="block";

}
else if(score===7){ console.log('argint');
document.getElementById('rezultat').innerHTML="Felicitari!Ai obtinut medalia de argint!"; document.getElementById('medalie-img').src="Media/silver.png";
document.getElementById('answers-container').style.display="block";

}
else {document.getElementById('rezultat').innerHTML="Felicitari! Trofeul este al tau.";
document.getElementById('medalie-img').src="https://cdn.pixabay.com/photo/2018/09/21/22/13/award-3694138_960_720.png";}


}

//Sunt eliminate diacriticele
function diacritice(strAccents) {
		var strAccents = strAccents.split('');
		var strAccentsOut = new Array();
		var strAccentsLen = strAccents.length;
		var accents = 'ăâîșțÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
		var accentsOut = "aaistAAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
		for (var y = 0; y < strAccentsLen; y++) {
			if (accents.indexOf(strAccents[y]) != -1) {
				strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
			} else
				strAccentsOut[y] = strAccents[y];
		}
		strAccentsOut = strAccentsOut.join('');
		return strAccentsOut;
	}

//Prin apasarea butonului 'Finalizeaza' sunt verificate raspunsurile si este stabilit scorul
function finalChallenge(){

	let score=0;

	var answers = [];

	for(let i=0;i<8;i++)
	{
		let a;
		let b;

		a = document.getElementsByClassName('ans')[i].value;	
		a = a.toLowerCase();
		a = a.replace(/\s/g,'');
		a = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
		a = diacritice(a);
		answers[i] = a;
		b = questions[alegere][i+2].a;
		b = b.toLowerCase();
		b = b.replace(/\s/g,'');
		b = b.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
		b = diacritice(b);

		if(a===b) score++;
	}

	for(let i=0;i<8;i++)
	{
		let ok=0;
		if(answers[i]==='') ok++;
		if(i===7 && ok<8) resChallenge(score);
		else if(i===7 && ok===8) resChallenge(0);
	}
}

