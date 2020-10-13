import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private backend: BackendService) {}

  name: string;
  student_no: number;
  branch: string;
  mobile_no: number;
  email: string;
  password: string;
  response: any;
  formData: any;

  ngOnInit() {}

  register(data) {
    this.formData = data.value;
    this.backend.register(this.formData).subscribe(res => {
      this.response = res;
      data.reset();
    });
  }
}
