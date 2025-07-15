import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Toolbar } from "./toolbar/toolbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'entregable-01';
}
