import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MenuItem } from "primeng/api";
import { SuportedLangs } from "../../enums/suported-langs.enum";
import { NavigationService } from "../../services/navigation-service/navigation.service";
import { AuthService } from "../../services/auth-service/auth.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  SuportedLangs = SuportedLangs;
  suportedLangsArray!: string[];
  CurrentLang!: string;
  items: MenuItem[] = [];

  showFloatingComponent = false;

  constructor(
    public translate: TranslateService,
    public navigation: NavigationService,
    public authService: AuthService
  ) {
    this.suportedLangsArray = Object.values(this.SuportedLangs);
    this.translate.addLangs(this.suportedLangsArray);
    this.loadLangLocal();
  }

  ngOnInit(): void {
    this.items = [
      {
        label: "First Page",
        escape: false,
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "NEWS",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "COMICS",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: `<span
        (mouseenter)="showFloatingComponent = true"
        (mouseleave)="showFloatingComponent = false"
        >Refresh</span
      >`,
        escape: false,
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "MOVIES",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "TV SHOWS",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "GAMES",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "VIDEOS",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
      {
        label: "MORE",
        icon: "pi pi-fw pi-prime",
        routerLink: "./page1/1",
      },
    ];
  }

  private loadLangLocal(): void {
    if (localStorage.getItem("lang")) {
      this.translate.setDefaultLang(
        localStorage.getItem("lang") ?? this.SuportedLangs.SPANISH
      );
      this.CurrentLang = localStorage.getItem("lang") ?? "";
    } else {
      const navLanguage: string = navigator.language
        .split("-")[0]
        .toLowerCase();

      if (this.suportedLangsArray.includes(navLanguage)) {
        localStorage.setItem("lang", navLanguage);
        this.translate.setDefaultLang(
          localStorage.getItem("lang") ?? SuportedLangs.SPANISH
        );
        this.CurrentLang = localStorage.getItem("lang") ?? "";
      } else {
        this.setLang(this.SuportedLangs.SPANISH);
        this.CurrentLang = this.SuportedLangs.SPANISH;
      }
    }
  }

  public setLang(lang: SuportedLangs) {
    localStorage.setItem("lang", lang);
    this.translate.setDefaultLang(
      localStorage.getItem("lang") ?? SuportedLangs.SPANISH
    );
    this.CurrentLang = lang;
  }

  public langChange(event: any) {
    // event.originalEvent: Browser event
    // event.value: Selected option value
    this.setLang(event.value);
  }
}
