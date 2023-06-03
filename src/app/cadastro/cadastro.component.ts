import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.username = '';
    this.email = '';
    this.password = '';
  }

  signup() {
    this.authService.emailSignup(this.username, this.email, this.password);
  }

  ngOnInit() {}
}
