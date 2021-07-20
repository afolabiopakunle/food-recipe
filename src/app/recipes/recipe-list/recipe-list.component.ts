import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Jollof Rice', 'A new recipe as a test', 'https://i1.wp.com/businessday.ng/wp-content/uploads/2020/09/Untitled-design-2020-09-25T170910.855.png?fit=700%2C400&ssl=1'),
    new Recipe('Amala', 'Nigerian food', 'https://connectnigeria.com/articles/wp-content/uploads/2019/02/Amala.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
