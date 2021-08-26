const favMeals=JSON.parse(localStorage.getItem('favMeals'));
mealsList=document.getElementById("meals-list");
let url='https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const fetchData=async (mealId)=>{
    try {
        let res=await fetch(url+mealId);
        let data=await res.json();
        displayResults(data.meals[0]);
    } catch (error) {
        console.error(error);
    }
}


const showFav=()=>{
    if(favMeals.length===0){
        mealsList.innerHtml='<h1>No Favourite Meals Present</h1>'
    }else{
        favMeals.map((mealId)=>{
            const mealData=fetchData(mealId);
        })
    }
}

const displayResults=(meal)=>{
    let isFav=true;
    mealsList.innerHTML +=`<li class="meal">
    <img src="${meal.strMealThumb}" /img>
     <div class="meal-name" id="${meal.idMeal}">
     <h2 class="recipe-name">${meal.strMeal}</h2> 
     <i class="${ isFav ? 'fas' : 'far' } fa-heart fav-btn"></i>
     </div>
     </li>`;
}

mealsList.addEventListener('click',(e)=>{
    if(e.target.className == 'recipe-name'){
        let recipeId=e.target.parentNode.id;
        window.open(`recipe.html?id=${recipeId}`);
    }
})
showFav();

