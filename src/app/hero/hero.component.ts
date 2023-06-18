import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  categoriesArray=['Discover','Branding','Animation','Illustration','Mobile','Print','Product Design','Typography','Web Design']

  selectedCategory='Discover'

  heroTitle='Explore the world’s leading design portfolios'

  heroSubTitle=`Millions of designers and agencies around the world showcase their portfolio work on Dribbble - 
  the home to the world’s best design and creative professionals.`

  searchPlaceHolder='Search for designs here ...'


  


   clicked(data:string) {

    this.selectedCategory=data;

    console.log(data)
    
  }


  @Input() input='';


  @Output() inputChange=new EventEmitter<string>()

  textChanged(event :Event){

    this.inputChange.emit((event.target as HTMLInputElement).value)
  }

}
