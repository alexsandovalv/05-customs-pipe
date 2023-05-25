import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  public nameLower : string = 'alexander';
  public nameUpper : string = 'alexander'
  public fullName : string = 'aLeXaNdeR'

  public customDate: Date = new Date();

}
