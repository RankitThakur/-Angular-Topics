import { ComponentFixture, TestBed,  } from '@angular/core/testing';
import { SimpleChange, Component } from '@angular/core';

import { LifecyclehookComponent } from './lifecyclehook.component';

fdescribe('LifecyclehookComponent', () => {
  let component: LifecyclehookComponent;
  let fixture: ComponentFixture<LifecyclehookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclehookComponent, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the exeution of the ng onInit hook', () => {
    expect(component.name).toContain("Test")
  });

  it('should test the MANUAL exeution of the ng onInit hook', () => 
  {
    component.ngOnInit();
    expect(component.name).toContain('Test');
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement);
  });

  it('should test the exeution the submit function', () => {
    component.submitCompanyName()
    expect(component.name).toBe('App')
  });

  it('should test the exeution the ngDoCheck,', () => {
    component.ngDoCheck();
    expect(component.name).toContain('Test')
  })

  it('should test the exeution the ngAfterContentInit,', () => {
    component.ngAfterContentInit();
    expect(component.name).toContain('Test')
  })

});
