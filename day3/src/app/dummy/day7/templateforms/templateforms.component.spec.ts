import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';

import { TemplateformsComponent } from './templateforms.component';

fdescribe('TemplateformsComponent', () => {
  let component: TemplateformsComponent;
  let fixture: ComponentFixture<TemplateformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ],
      declarations: [ TemplateformsComponent ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('[Name-invaild ]- should check email file is not vaild', async () => {
    let yourName: any = component.yourName
    expect(yourName.valid).toBeFalsy();    
    })
    it('[Password-invaild ]- should check email file is not vaild', async () => {
        let password: any = component.passWord
        expect(password.errors).toBeFalsy();    
    })
})
