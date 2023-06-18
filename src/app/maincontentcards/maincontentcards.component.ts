import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-maincontentcards',
  templateUrl: './maincontentcards.component.html',
  styleUrls: ['./maincontentcards.component.css']
})
export class MaincontentcardsComponent {


 @Input() cardTitle=''
  
 @Input() cardAuthorLogoUrl=''
  
 @Input() cardAuthorName=''

 @Input() cardLevel=''

  @Input()  cardLikeCount=''

  @Input()  cardFavCount=''

  @Input() cardUrl=''



  @Output()  favClicked:EventEmitter<string>=new EventEmitter()

  @Output()  likeClicked:EventEmitter<string>=new EventEmitter()



}
