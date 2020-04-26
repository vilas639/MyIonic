import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

   private recpe: Recipes[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      // tslint:disable-next-line: max-line-length
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];


  constructor() { }

    getallrecipes() {
     return [...this.recpe];
    }

    getrecipebyid(recipeid: string) {
      return {
        ...this.recpe.find(recpe => {
          return recpe.id === recipeid;
        })
      };

      

    }

    deleteRecipe(recipeId: string) {
      this.recpe = this.recpe.filter(recipe => {
        return recipe.id !== recipeId;
      });
    }
}
