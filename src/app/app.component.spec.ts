import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';

describe('AppComponent', () => {
  beforeEach(async(() => {

    const APP_ROUTES: Routes=[
      {path :'', redirectTo:'/recipes', pathMatch:'full'},
      {path:'recipes',loadChildren:'./recipes/recipe.module#RecipesModule'},
      {path:"shopping",loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'}, 
      {path:'**',redirectTo:'/recipes',pathMatch:'full'}
  ];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports:[ RouterTestingModule ],
      providers:[ {provide: RecipeService }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    debugger;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Welcome to my recipe app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to my recipe app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
