import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'programmierdemo'; 

  heading: string = 'Welcome to Angular workshop!';
  myNumber: number = 3;

  imgSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Linz_Blick_von_Freinbergstrasse_32-2_%28cropped%29.jpg/2880px-Linz_Blick_von_Freinbergstrasse_32-2_%28cropped%29.jpg';

  headingClass: string = 'error';
  checked: boolean = true;

  colors = ['white', 'black', 'blue'];

  today = new Date();

  


 

  headingHasError = true;

  headingClassesExpression = {
    error: true,
    success: true,
    textUnderline: true
  }

  headingColor = 1 != 1 ? "yellow" : 'green';

  onButtonClick(): void {
    this.myNumber++;
    console.log('button clicked');
  }
}
