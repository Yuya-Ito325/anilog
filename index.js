"use static";

const addButton = document.getElementById('add-button');
const addName = document.getElementById('add-name');
const nameList = document.getElementById('name-list');
const add = document.createElement('li');

const anime = ['keionn','haruhi','syutainnzuge-to']






addButton.addEventListener('click',function(event){
if(addName === ''){
 alert ('文字を入力してください');
 return;
}else{
    const search = addName.value;
    anime.push(search);
    add.textContent = anime[anime.length -1];
    nameList.appendChild(add);
}
});