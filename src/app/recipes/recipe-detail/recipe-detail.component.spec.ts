import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;


  beforeEach(async(() => {

    const RECIPE_ROUTES: Routes = [
      { path: ':id', component: RecipeDetailComponent }
    ];

    TestBed.configureTestingModule({
      declarations: [RecipeDetailComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: RecipeService }, { provide: ShoppingListService },
      {
        provide: ActivatedRoute, useValue: {
          params: Observable.of({ id: 1 }), snapshot: {
            parent: { params: { id: 3 } }, paramMap: {
              get(name: string): string { return ''; }
            }
          }
        }
      }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
