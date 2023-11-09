import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
    template: `<div>
                    <h1> {{ 'First Name : '+ FirstName + ', Last Name : ' + LastName }} </h1>                 
               </div>`
})

export class AppComponent {
  FirstName: string = 'Anurag';
  LastName: string = 'Mohanty';
}