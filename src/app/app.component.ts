
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
    template: `<div>
                    <h1>{{pageHeader}}</h1>                  
               </div>`
})
export class AppComponent {
    pageHeader: string = 'Student Details';
}
