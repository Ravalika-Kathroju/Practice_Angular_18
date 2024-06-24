import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterModule } from '@angular/router';
@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})



export class IfelseComponent {
  div1Visible: boolean = true;
  isWarningDivVisible: boolean = true;
  num1 : string = '';
  num2 : string = '';
  selectedStatus: string = '';
  hideDiv1(){
    this.div1Visible = false;

  }
  showDiv1(){
    this.div1Visible = true;

  }
  toggleDiv2(){
    this.isWarningDivVisible = !this.isWarningDivVisible;

  }

}
