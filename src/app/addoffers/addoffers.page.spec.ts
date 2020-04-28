import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddoffersPage } from './addoffers.page';

describe('AddoffersPage', () => {
  let component: AddoffersPage;
  let fixture: ComponentFixture<AddoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
