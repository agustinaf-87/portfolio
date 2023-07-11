import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth-service/auth.service";
import { NotificationService } from "../../services/error-notification/notification.service";
// import { LoginCorrect } from "../../utils/validators/login-form-correct.validator";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        public_key: new FormControl("3208de67f0498a84f1041a2f2c450415", [
          Validators.required,
        ]),
        private_key: new FormControl(
          "7e616377057716e202ec371c6a3e9093c2de838a",
          [Validators.required]
        ),
      }
      // {
      //   updateOn: "submit",
      //   asyncValidators: [this.loginCorrect.validate.bind(this.loginCorrect)],
      //   validators: [Validators.required],
      // }
    );
  }

  login(): void {
    if (this.loginForm.valid) {
      const publicKey = this.loginForm.get("public_key")?.value;
      const privateKey = this.loginForm.get("private_key")?.value;
      this.authService.login(publicKey, privateKey);
      this.notificationService.showSuccess("Login successful!");
    } else {
      this.notificationService.showError("Please enter valid credentials");
    }
  }
}
