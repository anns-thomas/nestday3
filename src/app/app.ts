import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/navbar/navbar";
import { About } from "./page/about/about";
import { Form } from "./component/form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task');
}
