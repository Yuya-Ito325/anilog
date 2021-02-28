"use static";

const addButton = document.getElementById('add-button');
const addName = document.getElementById('add-name');
const nameList = document.getElementById('name-list');
const anime = [];






addButton.addEventListener('click',function(event){
if(addName === ''|| addName === null){
    alert ('文字を入力してください');
    return;
}else{
    const add = document.createElement('li');
    const search = addName.value;
    anime.push(search);
    add.textContent = anime[anime.length -1];
    nameList.appendChild(add);
}
});