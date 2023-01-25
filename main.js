let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
let btn = document.getElementById("submitBtn");

form.addEventListener("submit", addItem);
itemList.addEventListener("click",removeItem);
filter.addEventListener("keyup",filterItems);
//add item
function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById("item");
    let li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem.value));
    li.appendChild(document.createTextNode(inputEle.value));

    let editBtn = document.createElement("button");
    editBtn.className="btn btn-primary float-right btn-sm";
    editBtn.appendChild(document.createTextNode("E"));
    li.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm  float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    newItem.value='';
    inputEle.value='';
}
//remove items
function removeItem(e){
    e.preventDefault();
    //console.log(e.target);
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure you want to delete....?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }    
    
}
//filter items
function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let description = item.childNodes[1].textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1|| description.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
}

//add input description
let inputEle = document.createElement("input");
inputEle.type="text";
inputEle.className = "form-control mr-2";
form.insertBefore(inputEle,btn);