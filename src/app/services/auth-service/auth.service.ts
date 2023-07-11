import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Md5 } from "ts-md5";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  login(publicKey: string, privateKey: string) {
    const ts = new Date().getTime();
    const hash = Md5.hashStr(ts + privateKey + publicKey);
    this.saveDataInSession(publicKey);
    this.saveDataInLocal(ts.toString(), hash.toString());
    this.router.navigateByUrl("/");
  }

  saveDataInSession(key: string) {
    sessionStorage.setItem("public-key", key);
  }

  getDataSession() {
    return sessionStorage.getItem("public-key");
  }

  saveDataInLocal(ts: string, hash: string) {
    localStorage.setItem("ts", ts);
    localStorage.setItem("hash", hash);
  }

  getDataLocal() {
    return {
      ts: localStorage.getItem("ts"),
      hash: localStorage.getItem("hash"),
    };
  }

  logout(): void {
    localStorage.removeItem("hash");
    localStorage.removeItem("ts");
    sessionStorage.removeItem("public-key");
    this.router.navigateByUrl("/");
  }

  isLoggedIn(): boolean {
    return this.getDataSession() !== null;
  }

  // getOne(): Observable<IDataWrapper<ICharacter>> {
  //   return this.http.get<IDataWrapper<ICharacter>>(
  //     `${environment.URL_API}/characters/1011334`
  //   );
  // }
}
