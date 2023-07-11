import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a footer", () => {
    const footer = fixture.nativeElement.querySelector("footer");
    expect(footer).toBeTruthy();
  });
  it("should display a logo", () => {
    const logo = fixture.nativeElement.querySelector("img");
    expect(logo).toBeTruthy();
  });
});
