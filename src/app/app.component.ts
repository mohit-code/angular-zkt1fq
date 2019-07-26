import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   onClickSubmit(data) {
     if(data.Username=='mohit' && data.Password=='mohit'){

     }
     else{
       alert("Invalid username or password");
     }
     alert("Entered Username:"+data.Username);
     alert("Entered Password:"+data.Password);
   }
   getUrl() {
    return "url('https://i.pinimg.com/originals/da/d6/5c/dad65c030621548b4f6d9dccbf3b12df.gif')";
  }
}
