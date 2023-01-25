//EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// //  GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';
// items[3].style.fontWeight = 'bold';
// items[4].style.fontWeight = 'bold';

//items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i < items.length;i++){
//     items[i].style.backgroundColor = 'f4f4f4';
// }

// // GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i < items.length;i++){
//     items[i].style.backgroundColor = 'f4f4f4';
// }

//QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.background = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// //QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = '#ccc';
// }

let itemList = document.querySelector("#items");
//PARENTNODE
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentNode.parentNode.parentNode);

//PARENTELEMENT
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);
//itemList.parentElement.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentElement.parentElement.parentElement);

//CHILNODES
console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.backgroundColor = "red";
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor="red";

// //FIRSTCHILD
// console.log(itemList.firstChild);
// //FIRST ELEMENT CHILD
// console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = "yellow";
//itemList.firstElementChild.style.backgroundColor="yellow";

//LASTCHILD
//console.log(itemList.lastChild);
//LAST ELEMENT CHILD
// console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = "blue";
//itemList.lastElementChild.style.backgroundColor="blue";

//next sibling
//console.log(itemList.nextSibling);
//next element sibling
//console.log(itemList.nextElementSibling);
//previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
//CREATE ELEMENT
let newList = document.createElement("li");
newList.className = "Hello";
newList.id = "hellooooo";
newList.setAttribute("title", "Hello Div");
var newdivText = document.createTextNode("Hello world");
newList.appendChild(newdivText);
newList.style.fontSize = "15px";
newList.style.listStyleType = "none";
itemList.insertBefore(newList, itemList.firstElementChild);
console.log(newList);

let newTit = document.createElement("title");
newTit.className = "Hello";
var newTitText = document.createTextNode("Hello world");
newTit.appendChild(newTitText);
newTit.style.fontSize = "15px";
let head = document.querySelector("head");
let title = document.querySelector("title");
head.insertBefore(newTit, title);
console.log(newTit);
