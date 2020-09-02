import { Component, OnInit, Inject } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import{ MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  constructor(private userService: UserserviceService, private DomSanitizer: DomSanitizer, private router: Router,public dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit( ) {  }
  login() {
    console.log("wellcome to login user");
    this.userService.login(this.name, this.password).subscribe(res => {
      console.log("rrrrrrrrrr");
      console.log(res);
      

    },
      (erorr) => {
        console.log("erorrrrrrrr!!!!!!!!!!!!!!!!! :(");
        
      });
      this.close();
      this.router.navigateByUrl('/private_area')
  }
  close(){
    this.dialogRef.close();
  }
  register(){
    this.close();
    this.router.navigateByUrl('register');
  }
}
