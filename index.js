// const techHdr = ""
// console.log("Tech TALKS!");


const btn = document.querySelector('button');
btn.style.backgroundColor = 'gray';
console.log(btn);

//add event listener
//syntax is:
//element.addEventListener()
btn.addEventListener('click', function(evt) {
 
//test this out
console.log(evt);

// //when someone clicks the btn i need the input 
// //text and add that to the list, at the end

// // create a list and add to the end of the list

const li = document.createElement('li')

// //this is now empty, lets add some text

const input = document.querySelector('input');
console.log(input.value);
li.textContent = input.value;

// //i need to add this li to the end of the list
document.querySelector('ul').appendChild(li);

 });

 document.querySelector('ul')
    .addEventListener("click", handleUlClick);

    function handleUlClick(evt) {
        console.log(evt.target);
        console.dir(evt.target);
    
        console.log(evt.target.localName);
        console.log(evt.target.nodeName);
    
        if (evt.target.localName === 'li') {
        let evtColor = evt.target.style.color;
        console.log(evtColor);
        if (evt.target.style.color == 'red') {
            evt.target.style.color = 'black';
        } else {
            evt.target.style.color = 'red';
        }
    }
    }

// handle button function
// btn.addEventListener('click', handleButton);

// function handleButton(evt) {
// // btn.addEventListener('click')
// console.log(evt)
// }

// const li = document.createElement('li');

// btn.removeEventListener(ul).appendChild(li)console.log("my script is good!");

//make a variable called titleEl
//hold variable on element
//may see the word cache the element
//document.getElementById is the method that looks at html to sceript in javascript

let titleEl = document.getElementById("title");

console.log(titleEl);

//access elements without an id 
// document.querySelector(selector);
// only returns the first 

let h1El = document.querySelector("h1");
console.log(h1El);


//________PRACTICE
//FIRST USE THE QUERY SELECTOR TO ACCESS THE <P> RAG AND 
// let pEl = document.querySelector("p");
// //CACHE IT INTO THE VARIABLE pE1 
// console.log(pEl);

let pEl = document.querySelector(".cool");
//CACHE IT INTO THE VARIABLE pE1 
console.log(pEl);

computer.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      computer.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

pEl.textContent ='Check out our <strong>Tech Careers</> below'    
//would print as such instead of html paragraph for both examples
pEl.innerHTML ='Check out our <strong>Tech Careers</strong> below'


//we have a ul and li as a class "comment"
// create a list El variable that holds all of the (li)
//then console log each one

// let myComment = document.querySelectorAll(".comment" )
// console.log(myComment);

 myComment = document.querySelectorAll("list")
console.log(myComment);

myComment.forEach(listitem => {
    console.log(listitem);
    console.log(listitem.textContent);
    console.log('parent node');
    console.log(listitem.parentNode);
    console.log('***** next element sibling *****');
    console.log(listitem.nextElementSibling);


    console.log('class name')
    console.log(listitem,className)

if(listitem.className === 'comment') {
    console.log('i could do something with only the li')
} else {
    console.log('i cant do anything, ignore these')
    listitem.className = 'azure'
//you can also use (see below)
    listitem.classList.add('black');
// //see entire by (see below)
    listitem.classList;
 }

});

console.log(titleEl);

//access style, large object with style
titleEl.style.textAlign ='center'; // will override other styling
titleEl.style.color='white';
titleEl.style.backgroundColor = 'green';
titleEl.style.display="";



pEl.style.backgroundColor = 'green';
pEl.style.color='white';

console.log(pEl.getAttribute("class"));
// console.log(first);
console.log(pEl.hasAttribute("class"));
console.log(pEl.hasAttribute("id"));


//createElement ---- aTags added to the end

let aTag = document.createElement('a');

//<a> usually have a textContent attribute and
//an href attribute
//add textContent of "visit google"

aTag.textContent ="click here"
//without href it wont work
//so we also need to update href
aTag.setAttribute('href', 'https://www.indeed.com/career/full-stack-developer/salaries');
console.log(aTag);
document.body.appendChild(aTag);




let uList = document.createElement('ul');
uList.textContent =('See More Income Salaraies here: ');





document.body.appendChild(uList);
//adds directly to ul as aTag

uList.appendChild(aTag);

let listitem =document.createElement('li');
listitem.appendChild(aTag2);
// listitem.appendChild(aTag)
uList.appendChild(listitem);


let commentsEls = document.getElementsByClassName('comment');
console.log(commentsEls);

//naming each thing that I am looking at as going through the for loop
for(let commentsEl of commentsEls) {
    console.log(commentEl)
};


// _________________________________________________
// _______FORM SECTION_________________________

let formEl = document.querySelector("javaform1");

console.log(formEl);
[]
formEl.style.textAlign ='center'; // will override other styling
formEl.style.color='white';
formEl.style.backgroundColor = 'red';


const form = document.getElementById("form");
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const password = form.elements["password"];

// Simple email validation.
// Using the event object's "returnValue" property,
// we can prevent form submission if the values are invalid.
function validateEmail(evt) {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }
};

let train = document.getElementsById("train")
p2hdr.style.color = "yellow";
console.log(train);