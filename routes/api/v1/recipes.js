const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

router.get('/', (request, response) => 
    {
        const recipeList =  recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        prepTime: recipe.prepTime,
        difficulty: recipe.difficulty
    }))
        response.send(recipeList)
})

router.post('/recipe/add', (request, response) => 
    {
     const {title, image, ingredients, instructions, prepTime, difficulty} = request.body
        const id = recipes.length + 1

    const recipe = {
        id,
        title,
        image,
        ingredients,
        instructions,
        prepTime,
        difficulty
    }

    recipes.push(recipe)
    response.send(recipe)
})

router.get('/recipe/:id', (request, response) =>
{
    const {id} = request.params
    const recipe = recipes.find(item => item.id.toString() === id.toString())
    response.send(recipe)
})

module.exports = router