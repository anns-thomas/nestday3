import { Component } from '@angular/core';
import { Paragraph } from "../../component/paragraph/paragraph";
import { Accordion } from "../../component/accordion/accordion";
import { Carousel } from "../../component/carousel/carousel";

@Component({
  selector: 'app-about',
  imports: [Paragraph, Accordion, Carousel],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
