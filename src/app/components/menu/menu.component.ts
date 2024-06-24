import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

//Creating object of injectable services.

export class MenuComponent {

  constructor(private router: Router){

  }
  navigateToHome(){
    this.router.navigateByUrl("Home-route")
  }
}
