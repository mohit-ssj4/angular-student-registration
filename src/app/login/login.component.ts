import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private backend: BackendService) { }

  student_no: number;
  password: string;
  formData: any;
  response: any;

  ngOnInit() {
  }

  login(data) {
    this.formData = data.value;
    this.backend.login(this.formData).subscribe(res => {
      this.response = res;
      console.log(res);
    });
  }
}