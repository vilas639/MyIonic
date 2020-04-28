import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewoffersPage } from './newoffers.page';

describe('NewoffersPage', () => {
  let component: NewoffersPage;
  let fixture: ComponentFixture<NewoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
