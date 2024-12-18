class CalorieTracker
{
  constructor()
  {
    this._calorieLimit=2000;
    this._totalCalories=0;
    this._meals=[];
    this._workouts=[];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
  }
  addMeal(meal)
  {
    this._meals.push(meal);
    this._totalCalories+=meal.calories;
    this._render();
  }
  addWorkout(workout)
  {
    this._workouts.push(workout);
    this._totalCalories-=workout.calories;
    this._render();
  }
  
  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }
  _displayCaloriesTotal()
  {
    const totalCaloriesEl=decodeURIComponent.getElementById('calories-total');
    totalCaloriesEl.innerHTML=this._totalCalories;
  }
  _render()
  {
    this._displayCaloriesTotal();
  }
}
class Meal
{
  constructor(name,calories)
  {
    this.name=name;
    this.calories=calories;
    this.id=Math.random.toString(16).slice(2);
  }
}
class Workout
{
  constructor(name,calories)
  {
    this.name=name;
    this.calories=calories;
    this.id=Math.random.toString(16).slice(2);
  }
}
const tracker=new CalorieTracker();

const breakfast=new Meal('breakfast',400);
tracker.addMeal(breakfast);

const rum=new Meal('Morning run',300);
tracker.addWorkout(run);

