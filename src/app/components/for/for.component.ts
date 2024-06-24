import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  cityArray: string[] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];
  studentList: any[] = [
    {studentId:12, name:'AAA', city:'Pune', isActive: false},
    {studentId:22, name:'BBB', city:'Mumbai', isActive: false},
    {studentId:32, name:'CC', city:'Jalgao', isActive: true},
    {studentId:56, name:'DD', city:'Mumbai', isActive: false},
    {studentId:34, name:'EE', city:'Nagpur', isActive: false},
    {studentId:76, name:'FFF', city:'Thane', isActive: true},
  ]

}
