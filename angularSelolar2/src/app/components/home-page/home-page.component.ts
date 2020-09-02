import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,public dialog:MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.openModal();
    }, 5000);
  }
  navigatePage(page) {
this.router.navigateByUrl('/'+page)
  }
  openModal(){
    this.dialog.open(LoginComponent)
  }
}
