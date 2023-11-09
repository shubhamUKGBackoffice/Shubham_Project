import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
    template: `<div>
                    <img [src] = 'ImagePath' />                
               </div>`
})
export class AppComponent {
  ImagePath : string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
}
