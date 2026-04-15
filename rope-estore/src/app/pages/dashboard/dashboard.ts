import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  contador: number = 0;
  passo: number = 1;

  inc() {
    this.contador += this.passo;
  }

  dec(){
    if (this.contador > 0) {
      this.contador -= this.passo;
    }
  }
}
