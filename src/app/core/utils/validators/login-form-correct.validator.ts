// import { Injectable } from "@angular/core";
// import {
//   AbstractControl,
//   AsyncValidator,
//   ValidationErrors,
// } from "@angular/forms";
// import { catchError, map, Observable, of } from "rxjs";
// import { AuthService } from "../../services/auth-service/auth.service";

// @Injectable({
//   providedIn: "root",
// })
// export class LoginCorrect implements AsyncValidator {
//   constructor(private authService: AuthService) {}

//   // validate(control: AbstractControl): Observable<ValidationErrors | null> {
//   //   if (control.dirty) {
//   //     return this.authService.getOne().pipe(
//   //       map((result) => (result.code == 200 ? { loginCorrect: true } : null)),
//   //       catchError(() => of(null))
//   //     );
//   //   } else {
//   //     return of(null);
//   //   }
//   // }
// }
