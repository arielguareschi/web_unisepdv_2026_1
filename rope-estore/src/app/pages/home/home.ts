import { Component } from '@angular/core';
import { Produtos } from "../produtos/produtos";

@Component({
  selector: 'app-home',
  imports: [Produtos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
