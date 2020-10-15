import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private backend: BackendService) {}

  student_no: number;
  password: string;
  formData: any;
  displayLoader = false;
  success = false;
  failure = false;

  ngOnInit() {}

  login(data) {
    this.formData = data.value;
    this.displayLoader = true;
    this.failure = false;
    this.backend.login(this.formData).subscribe(res => {
      this.displayLoader = false;
      if (res.status == 200) {
        this.success = true;
      } else {
        this.failure = true;
      }
    });
  }

  removeAlert() {
    var element = document.getElementById("alert");
    element.remove();
  }
}
