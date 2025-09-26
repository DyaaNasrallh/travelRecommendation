const url='travel_recommendation_api.json';
const nam=[];
const btnSearch=document.getElementById('btnSearch');
const disPlay=document.getElementById('displayReco');
const btnClear=document.getElementById('clear');
function r(){
  const  keyW=keyword();
fetch(url)
.then(response=>response.json())
.then(data=>{
    for(let key in data){
        if(key.slice(0,-1).toLocaleLowerCase()===keyW){
            console.log(key);
            for(var i=0;i<data[key].length;i++){
   
                 nam.push(data[key][i]);
            };
            recommendations()
        }
        else{
            console.log('not finde')
        };
    
   
}
console.log(nam);
});}
function keyword(){
    const search=document.getElementById('search').value;
    word=search.toLowerCase();
   document.getElementById('search').value="";
   
  if (word.endsWith("s")) {
    return word.slice(0, -1); 
  }

  return word;
}
function recommendations(){
 
    nam.forEach(item=>{
        disPlay.innerHTML+=
        `<div>
        <img src="${item.imageUrl}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        </div>`
    })
}
function clear(){
nam.length=0;
disPlay.innerHTML="";

}
btnSearch.addEventListener('click',r);
btnClear.addEventListener('click',clear);


