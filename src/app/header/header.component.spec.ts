import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { RecipeService } from '../recipes/recipe.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {

    const APP_ROUTES: Routes=[
      {path :'', redirectTo:'/recipes', pathMatch:'full'},
      {path:'recipes',loadChildren:'./recipes/recipe.module#RecipesModule'},
      {path:"shopping",loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'}, 
      {path:'**',redirectTo:'/recipes',pathMatch:'full'}
  ];

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[RouterTestingModule],
      providers: [ { provide: RecipeService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
