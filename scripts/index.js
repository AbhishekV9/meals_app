
searchBar=document.getElementById("searchBar");
mealsList=document.getElementById("meals-list");
container=document.getElementById("container");
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
        //console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
        meals=await res.json();
        if(searchString==''){
            meals.meals=null;   
        }
        displayResults(meals.meals);
        showDetails(meals.meals);
    } catch(err){
        console.error(err);
    }
    // console.log(url+searchString);
    // await fetch(url+'Arrabiata')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
}

const displayResults=(meals)=>{
    if(meals===null){
        mealsList.innerHTML='<h1> No Meal Availaible With This Name'
    }else{
        const mealString=meals.map((meal)=>{
            return `<li class="meal">
            <img src="${meal.strMealThumb}" /img>
             <div class="meal-name" id="${meal.idMeal}">
             <h2 class="recipe-name">${meal.strMeal}</h2> 
             <i class="far fa-heart fav-btn"></i>
             </div>
             </li>`;
     
         }).join('');
         mealsList.innerHTML=mealString;
    }
   
}

let searchList = document.getElementById('meals-list');
searchList.addEventListener('click',(e)=>{
    console.log(e.target);
    let recipeId= e.target.parentNode.id;
    console.log(recipeId);
    if(e.target.className == 'recipe-name'){
        window.open(`recipe.html?id=${recipeId}`);
    }
})