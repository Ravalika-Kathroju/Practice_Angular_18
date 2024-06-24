import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] // Use styleUrls for CSS
})
export class DataBindingComponent implements OnInit {
  courseName: string = 'Angular 18';
  inputType: string = 'checkbox';
  inputType2: string = 'radio';
  myClassName: string = 'bg-primary';
  rollNo: number = 14;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  firstName = 'Ravalika Kathroju'; // No need for signal here

  constructor() {}

  ngOnInit(): void { // Initialize data if needed
  }

  changeCourseName(): void {
    this.courseName = 'React Js';
  }

  showAlert(message: string): void {
    alert(message);
  }
}

