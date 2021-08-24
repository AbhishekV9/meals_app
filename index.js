console.log("hellow");
searchBar=document.getElementById("searchBar");
mealsList=document.getElementById("meals-list");
let meals=[];
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
searchBar.addEventListener('keyup',(e)=>{
    const searchString=e.target.value.toLowerCase();
    //console.log(searchString);
    getResults(searchString);
})

const getResults=async (searchString)=>{
    try{
        const res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
        console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
        meals=await res.json();
        console.log(meals);

    } catch(err){
        console.error(err);
    }
    // console.log(url+searchString);
    // await fetch(url+'Arrabiata')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
}