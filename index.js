"use static";

const addButton = document.getElementById('add-button');
const addName = document.getElementById('add-name');
const nameList = document.getElementById('name-list');
const animeList = document.getElementById('anime-list');
let year = "";
let season = "";
let apiUrl = `http://api.moemoe.tokyo/anime/v1/master/${year}${season}`;
const anime = [];


apiLoad(apiUrl);


const year_btn0 = document.getElementById('0');
year_btn0.onclick = function(){
    year = year_btn0.value;
    loadList();
}
const year_btn1 = document.getElementById('1');
year_btn1.onclick = function(){
    year = year_btn1.value;
    loadList();
}
const year_btn2 = document.getElementById('2');
year_btn2.onclick = function(){
    year = year_btn2.value;
    loadList();
}
const year_btn3 = document.getElementById('3');
year_btn3.onclick = function(){
    year = year_btn3.value;
    loadList();
}
const year_btn4 = document.getElementById('4');
year_btn4.onclick = function(){
    year = year_btn4.value;
    loadList();
}
const year_btn5 = document.getElementById('5');
year_btn5.onclick = function(){
    year = year_btn5.value;
    loadList();
}
const year_btn6 = document.getElementById('6');
year_btn6.onclick = function(){
    year = year_btn6.value;
    loadList();
}
const year_btn7 = document.getElementById('7');
year_btn7.onclick = function(){
    year = year_btn7.value;
    loadList();
}


const season_btn10 = document.getElementById('10');
season_btn10.onclick = function(){
    season = season_btn10.value;
    loadList();
}
const season_btn11 = document.getElementById('11');
season_btn11.onclick = function(){
    season = season_btn11.value;
    loadList();
}
const season_btn12 = document.getElementById('12');
season_btn12.onclick = function(){
    season = season_btn12.value;
    loadList();
}
const season_btn13 = document.getElementById('13');
season_btn13.onclick = function(){
    season = season_btn13.value;
    loadList();
}


function loadList(){
    deleteList();
    apiUrl = `http://api.moemoe.tokyo/anime/v1/master/${year}${season}`;
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
    .then(response => {
        return response.json();
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
        add.classList.add('li-border');
        add.textContent = data[i].title;
        animeList.appendChild(add);
        //追加ボタン
        const addButton = document.createElement('button');
        addButton.classList.add('uk-button');
        addButton.classList.add('uk-button-secondary');
        addButton.classList.add('uk-button-small');
        addButton.classList.add('list-btn');
        addButton.innerText = '追加';
        addButton.addEventListener('click', function(){
            anime.push(data[i].title);
            add.textContent = anime[anime.length-1];
            nameList.appendChild(add);

            //削除ボタン追加
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('uk-button');
            deleteButton.classList.add('uk-button-secondary');
            deleteButton.classList.add('uk-button-small');
            deleteButton.classList.add('list-btn');
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
        add.classList.add('li-border');
        const search = addName.value;
        anime.push(search);
         add.textContent = anime[anime.length -1];
        nameList.appendChild(add);
         addName.value = "";

          //削除ボタン追加
         const deleteButton = document.createElement('button');
         deleteButton.innerText = '削除';
         deleteButton.classList.add('uk-button');
         deleteButton.classList.add('uk-button-secondary');
         deleteButton.classList.add('uk-button-small');
         deleteButton.classList.add('list-btn');
         deleteButton.addEventListener('click', () => RemoveList(deleteButton));
         add.appendChild(deleteButton);
}
});

const RemoveList = deleteButton =>{
    const targetTask = deleteButton.closest('li');
    nameList.removeChild(targetTask);
}

