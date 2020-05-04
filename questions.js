//Intrebari si raspunsuri posibile pentru quiz


let questions = [

{
	question: "Cum ai descrie ultima carte pe care ai citit-o?",
	a1: {a: "M-a facut sa rad",  s:30},
    a2: {a: "M-a motivat", s:20},
    a3: {a: "Mi-a dat de gandit", s:40},
    a4: {a: "M-a intristat", s:10}
},

{
	question: "Cum este cartea ta preferata?",
	a1: {a: "Amuzanta" , s:200},
    a2: {a: "De aventura", s:100},
    a3: {a: "Romantica", s:300},
    a4: {a: "Trista" , s:400}
},

{
	question: "Ce autor preferi?",
	a1: {a: "Lev Tolstoi" , s:120}, 
    a2: {a: "Ernest Hemingway", s:30},
    a3: {a: "Coehlo", s:60},
    a4: {a: "Jane Austen", s:90}
},

{
    question: "Ce tip de carte te atrage?",
    a1: {a: "De dragoste" , s:300},
    a2: {a: "De filosofie", s:400},
    a3: {a: "De aventura", s:100},
    a4: {a: "De nonfictiune",s:200}
},

{
    question: "Ce asteptari ai de la urmatoarea carte?",
    a1: {a: "Sa ma inveseleasca" , s:10},
    a2: {a: "Sa descopar lucruri noi", s:40},
    a3: {a: "Sa ma indragostesc de ea", s:30},
    a4: {a: "Sa ma ajute", s:20}
},

{
    question: "Ce personaj preferi?",
    a1: {a: "Jay Gatsby" , s:90},
    a2: {a: "Sherlock Holmes", s:30},
    a3: {a: "Holden Caulfield", s:120},
    a4: {a: "Harry Potter", s:60}
}

]

//Carti triste

let books1=[
{title:'Marele Gatsby', author:'F. Scott Fitzgerald', image:'https://goodread.ro/wp-content/uploads/2016/07/371531-e1467321739503.jpg'},
{title:'35 de kilograme de speranță', author:'A. Gavalda', image:'https://mcdn.elefant.ro/mnresize/1500/1500/images/17/391917/35-de-kile-de-speranta_1_fullsize.jpg'},
{title:'Trei într-o barcă', author:'Jerome K. Jerome', image:'https://www.libris.ro/img/pozeprod/59/1002/28/796889.png'},
{title:'Pentru cine bat clopotele', author:'Ernest Hemingway', image:'https://www.carti-online.com/images/ernest-hemingway-pentru-cine-bat-clopotele-1861.jpg'},
{title:'Culoarea purpurie', author:'Alice Walker', image:'https://2.bp.blogspot.com/-Js3fsl96mOE/Vdm0W5TCy1I/AAAAAAAADZ0/folzT4ccc_4/s1600/25594344.jpg'},
{title:'Clopotul de sticlă', author:'Sylvia Plath', image:'https://www.libris.ro/img/pozeprod/59/1002/26/1255103.jpg'},
{title:'Zei mărunţi', author:'Terry Pratchett', image:'https://i2.wp.com/www.carteadelaora5.ro/wp-content/uploads/2016/07/21341354.jpg?resize=300%2C300'},
{title:'Bunica mi-a spus să-ți spun că-mi pare rău', author:'Fredrik Backman', image:'https://i3.wp.com/www.printesaurbana.ro/wp-content/uploads/2017/07/bunica-mi-a-spus-300x300.jpg'},
{title:'Bibliotecara de la Auschwitz', author:'Antonia Iturbe', image:'https://i3.wp.com/www.printesaurbana.ro/wp-content/uploads/2017/07/bibliotecara-195x300.jpg'}
]

//carti pentru filosofi

let books4=[
{title:'Republica', author:'Platon', image:'https://www.libris.ro/img/pozeprod/59/1012/CF/315261.jpg'},
{title:'Banchetul', author:'Platon', image:'https://www.libris.ro/img/pozeprod/59/1002/8B/690987.png'},
{title:'Elogiul inactivității', author:'Bertrand Russell', image:'https://www.scena9.ro/assets/images/1198/1663815-0.jpeg'},
{title:'Ce înseamnă, oare, toate acestea?', author:'Thomas Nagel', image:'https://www.scena9.ro/assets/images/1198/9789735043674-2631608.jpg'},
{title:'Ecce homo', author:'Friedrich Nietzsche', image:'https://www.scena9.ro/assets/images/1198/1047438-0.jpg'},
{title:'Povestiri despre om', author:'Constantin Noica', image:'https://cdn.dc5.ro/img-prod/619284158-0-240.jpeg'},
{title:'Asa grait-a Zarathustra', author:'Friedrich Nietzsche', image:'https://s12emagst.akamaized.net/products/3472/3471374/images/res_fc702c9cfb5cc2f0e1b99b3b61c6779c_full.jpg'},
{title:'Asa a descoperit omul cainele', author:'Konrad Lorenz', image:'https://www.libhumanitas.ro/media/catalog/product/cache/1/image/255x355/9df78eab33525d08d6e5fb8d27136e95/a/s/asa-a-descoperit-omul-cainele-konrad-lorenz-humanitas-2018.jpg'}
]


//carti pentru indragostiti

let books3=[
{title:'Dragoste în vremea holerei', author:'Gabriel Garcia Marquez', image:'https://goodread.ro/wp-content/uploads/2016/06/819251-e1467232550339.jpg'},
{title:'Muzeul inocenţei', author:'Orhan Pamuk', image:'https://goodread.ro/wp-content/uploads/2016/06/871812-e1467285530890.jpg'},
{title:'Fata de hârtie', author:'Guillaume Musso', image:'https://goodread.ro/wp-content/uploads/2016/06/366735-e1467286412888.jpg'},
{title:'Maestrul și Margareta', author:'Mihail Bulgakov', image:'https://www.editura-art.ro/user_files/file/maestrul-si-margareta-bulgakov-cop1.jpg'},
{title:'Pacientul englez', author:'Michael Ondaatje', image:'https://cartilegiuliei.files.wordpress.com/2016/08/coperta1.jpg?w=624'},
{title:'Îndrăznește să iubești', author:'Katie McGarry', image:'https://www.libris.ro/img/pozeprod/59/1002/7E/884227.jpg'},
{title:'Suferințele tânărului Werther', author:'Johann Wolfgang von Goethe', image:'https://librariadelfin.ro/site_img/products/400/2016/06/suferintele-tanarului-werther-top-10_1_fullsize.jpg'},
{title:'Sub aceeasi stea', author:'John Green', image:'https://www.clb.ro/img/pozeprod/228/1002/6F/28632.jpg'},

{title:'Marele Gatsby', author:'F. Scott Fitzgerald', image:'https://goodread.ro/wp-content/uploads/2016/07/371531-e1467321739503.jpg'}
]

//carti motivationale

let books2=[
{title:'Puterea Prezentului', author:'Eckhart Tolle', image:'https://i0.wp.com/1cartepesaptamana.ro/wp-content/uploads/2017/09/PUTEREA-PREZENTULUI.jpg?resize=300%2C300&ssl=1'},
{title:'Puterea magica a gandului', author:'David J. Schwartz', image:'https://www.cristinne.ro/documente/puterea-magica-a-gandului-david-schwartz.jpg'},
{title:'Cei sase stalpi ai increderii in sine', author:'Nathaniel Branden', image:'https://www.cristinne.ro/documente/cei-sase-stalpi-ai-increderii-in-sine-nathaniel-branden.png'},
{title:'Forta entuziasmului', author:'Norman Vincent Peale', image:'https://www.cristinne.ro/documente/forta-entuziasmului-norman-vincent-peale-600x924.jpg'},
{title:'Atitudinea este totul', author:'Jeff Keller', image:'https://www.cristinne.ro/documente/atitudinea-este-totul-jell-keller.png'},
{title:'Cel mai bogat om din Babilon', author:'George S. Clason', image:'https://i1.wp.com/1cartepesaptamana.ro/wp-content/uploads/2017/09/cel-mai-bogat-om-din-babilon.jpg?resize=300%2C300&ssl=1'},
{title:'Pisica lui Dalai Lama si puterea lui Miau', author:'David Michie', image:'https://i2.wp.com/1cartepesaptamana.ro/wp-content/uploads/2017/09/pisica-lui-dalai-dama.jpg?resize=300%2C300&ssl=1'},
{title:'Omul care voia sa fie fericit', author:'Laurent Gounelle', image:'https://i2.wp.com/1cartepesaptamana.ro/wp-content/uploads/2017/09/omul-care-voia-sa-fie-fericit.jpg?resize=300%2C300&ssl=1'}
]

let score = 0;


let questionEl = document.getElementById('question');
let answer1 = document.getElementById('ans1');
let answer2 = document.getElementById('ans2');
let answer3 = document.getElementById('ans3');
let answer4 = document.getElementById('ans4');
let previousBttn = document.getElementById ('inapoi');
let nextBttn = document.getElementById ('inainte');
let finalBttn = document.getElementById ('final');


console.log(answer1);

let questionIndex =0;


function loadQuestion (questionIndex) {

//implementare intrebari si raspunsuri in codul HTML

questionEl.innerHTML = (questionIndex+1) + '.' + questions[questionIndex].question;
answer1.innerHTML = questions[questionIndex].a1.a;
answer2.innerHTML = questions[questionIndex].a2.a;
answer3.innerHTML = questions[questionIndex].a3.a;
answer4.innerHTML = questions[questionIndex].a4.a;
}

/*afisare butoane: daca suntem la prima intrebare nu vom avea buton de INAPOI;
  daca suntem la ultima intrebare butonul INAINTE va fi inlocuit de butonul FINALIZARE
  */

  function showBttns(questionIndex)
  {
    if(questionIndex===0) {
        previousBttn.style.display = "none";
        finalBttn.style.display = "none";}
        else if (questionIndex===questions.length-1) {nextBttn.style.display = "none";
        finalBttn.style.display = "inline-block";}
        else {
            previousBttn.style.display = "inline-block";
            nextBttn.style.display = "inline-block";
            finalBttn.style.display = "none";
        }
        
    }

    let answersScoreArray=[];

    for(let i=0;i<questions.length;i++)
        answersScoreArray[i]=0;

    function nextQuestion (){
     questionIndex++;
     loadQuestion(questionIndex);
     showBttns(questionIndex);
 }


 function previousQuestion (){
    questionIndex--;
    loadQuestion(questionIndex);
    showBttns(questionIndex);

}

// in functie de numarul x returnat de apasarea unui buton se acceseaza scorul raspunsului respectiv si este adunat la scorul total

function getResult(x){
    if(x===1)
    {score+=questions[questionIndex].a1.s;
        if(answersScoreArray[questionIndex]!==0) score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a1.s;}

    else if(x===2)
    {score+=questions[questionIndex].a2.s;
        if(answersScoreArray[questionIndex]!==0) score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a2.s;}

    
    else if(x===3)
    {score+=questions[questionIndex].a3.s;
        if(answersScoreArray[questionIndex]!==0) score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a3.s;}


    else 
    {score+=questions[questionIndex].a4.s;
        if(answersScoreArray[questionIndex]!==0) score-=answersScoreArray[questionIndex];
        answersScoreArray[questionIndex]=questions[questionIndex].a4.s;}
    return score;
}


let arri; //arri stocheaza numarul vectorului din care vom face recomandari

let ishuffle; // ishuffle va prelua indexul cartii recomandate din vectorul in care aceasta se afla
function showBook(score){
    let arrBook;
    if(score>=400 && score<580) {arrBook = books1; arri=1}
    else if (score >=580 && score<700) {arrBook=books2; arri=2}
    else if (score >=700 && score<1000) {arrBook=books3; arri=3}
    else if (score >=1000 && score<=1500) {arrBook=books4; arri=4}
    let book;
    let author;
    let cover;
    let ind=Math.floor(Math.random() * arrBook.length);
    ishuffle=ind;
    book=arrBook[ind].title;
    author=arrBook[ind].author;
    cover=arrBook[ind].image;
    document.getElementById('questions-container').style.display="none";
    document.getElementById('result').style.display="flex";
    document.getElementById('title').innerHTML='Carte: "'+ book+"\"";
    document.getElementById('author').innerHTML='Autor: '+ author;
    document.getElementById('co-img').src=cover;

}

//pentru atuncti cand este apasat butonul 'Am citit aceasta carte'

function shuffleBooks(){
    if(arri===1) { if(books1.length===1) document.getElementById('no-more-books').innerHTML="Ne pare rau! Momentan nu mai avem alte recomandari!"; else books1.splice(ishuffle, 1);}
    else if (arri===2) {
        if(books2.length===1) document.getElementById('no-more-books').innerHTML="Ne pare rau! Nu mai avem recomandari!";
        else books2.splice(ishuffle,1);}
        else if (arri===3) { if(books3.length===1) document.getElementById('no-more-books').innerHTML="Ne pare rau! Nu mai avem recomandari!"; else
        books3.splice(ishuffle,1);}
        else if (arri===4) { if(books4.length===1) document.getElementById('no-more-books').innerHTML="Ne pare rau! Nu mai avem recomandari!"; else
        books4.splice(ishuffle,1);}
        showBook(score);
        

    }

    function checkAll(){
    //verificam daca toate intrebarile au fost completate
    let ok=1;
    for(let i=0;i<=answersScoreArray.length;i++)
        if(answersScoreArray[i]==0) {alert('Toate intrebarile sunt obligatorii! Reintoarce-te si completeaza intrebarea '+ (i+1) + "!"); ok=0; break}
    if(ok===1) showBook(score);
}

loadQuestion(questionIndex);
showBttns(questionIndex);