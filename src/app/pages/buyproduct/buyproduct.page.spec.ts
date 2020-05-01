import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyproductPage } from './buyproduct.page';

describe('BuyproductPage', () => {
  let component: BuyproductPage;
  let fixture: ComponentFixture<BuyproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
