import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {


  private recpe: Recipes[] ;

  constructor(private rserv: RecipeService) { }

  ngOnInit() {
        this.recpe = this.rserv.getallrecipes();
  }

}
