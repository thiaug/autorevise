import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {

  constructor(private authService: AuthService) {
    
  }

  signup() {
    this.authService.emailSignup(this.username, this.email, this.password);
  }

  ngOnInit() {}
}
