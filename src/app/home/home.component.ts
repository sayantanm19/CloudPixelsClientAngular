import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showRegister: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleRegisterForm() {
    this.showRegister = !this.showRegister;
  }

  cancelRegisterMode(event: boolean) {
    this.showRegister = event;
  }

}
