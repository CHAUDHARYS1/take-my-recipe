const { Recipe } = require('../models');

const recipedata = [{
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"
  },
  {
    "title": "Burger ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Dinner",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"
  },
  {
    "title": "Pancakes",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Breakfast",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "French toast ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Breakfast",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Lasagnia",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Dinner",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Dynamite Prawns ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Appetizer",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Spicy Fish ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Appetizer",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Cheese Pizza ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Pot stickers ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "imageUrl": "https://eisforeat.com//wp-content/uploads/2017/12/MacnCheeseballs-26-1-1024x1024.jpg",
    "category": "Lunch",
    "ingredients": "eggs, sugar",
    "instructions": "Take two cup water, add it to a flour"
  }

];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;