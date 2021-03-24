"use static";

const addButton = document.getElementById('add-button');
const addName = document.getElementById('add-name');
const nameList = document.getElementById('name-list');
const animeList = document.getElementById('anime-list');
let year = document.getElementById('year');
let season = document.getElementById('season');
let apiUrl = `http://api.moemoe.tokyo/anime/v1/master/${year.value}${season.value}`;
const anime = [];

apiLoad(apiUrl);

year.onchange = function(){
    deleteList();
    year = document.getElementById('year');
    apiUrl = `http://api.moemoe.tokyo/anime/v1/master/${year.value}${season.value}`;
    apiLoad(apiUrl);
}

season.onchange = function(){
    deleteList();
    season = document.getElementById('season');
    apiUrl = `http://api.moemoe.tokyo/anime/v1/master/${year.value}${season.value}`;
    apiLoad(apiUrl);
}

//アニメデータ消去
function deleteList(){
    const animeListCount = animeList.childElementCount;
    for(let i=1; i <= animeListCount; i++){
        animeList.querySelector("li button").remove();
        animeList.querySelector("li").remove();
    }
}

//apiデータを読み込み
function apiLoad(url){
    fetch(url)
    .then(respons => {
        return respons.json();
    })
    .then(data => {
        addAnimeList(data);
    })
    .catch(error => {
        console.log("失敗しました");
    });
}

//apiデータを受け取りリスト表示
function addAnimeList (animeData){
    const data = animeData;
    for(let i=0; i <= Object.keys(data).length - 1; i++){
        const add = document.createElement('li');
        add.textContent = data[i].title;
        animeList.appendChild(add);
        //追加ボタン
        const addButton = document.createElement('button');
        addButton.innerText = "視聴リストに追加"
        addButton.classList.add('shine-btn');
        addButton.addEventListener('click', function(){
        anime.push(data[i].title);
        add.textContent = anime[anime.length-1];
        nameList.appendChild(add);

        //削除ボタン追加
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '削除';
        deleteButton.addEventListener('click', () => RemoveList(deleteButton));
        add.appendChild(deleteButton);
    });
    add.appendChild(addButton);
    
    }

}

//登録buttonをクリックでテキストボックスの文字をリスト化
addButton.addEventListener('click',function(event){
    if(addName.value === ''|| addName === null){
        alert ('文字を入力してください');
        return;
    }else{
        //リスト追加
        const add = document.createElement('li');
        const search = addName.value;
        anime.push(search);
         add.textContent = anime[anime.length -1];
        nameList.appendChild(add);
         addName.value = "";

          //削除ボタン追加
         const deleteButton = document.createElement('button');
         deleteButton.innerText = '削除';
         deleteButton.addEventListener('click', () => RemoveList(deleteButton));
         add.appendChild(deleteButton);
}
});

const RemoveList = deleteButton =>{
    const targetTask = deleteButton.closest('li');
    nameList.removeChild(targetTask);
}

