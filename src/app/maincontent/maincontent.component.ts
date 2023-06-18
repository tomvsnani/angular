import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent {




  constructor(private router: Router) {


  }



  favClicked(id: string) {

    let objIndex = this.cardArray.findIndex(v => v[v.length - 1] == id)

    this.cardArray[objIndex][5] = Number(this.cardArray[objIndex][5]) + 1 + ""

  }

  private _input = ''

  public get input() {
    return this._input
  }


  // goToShots(id: string) {
  //   this.router.navigate([`/shots/${id}`])

  // }

  @Input() public set input(value) {
    console.log(value)
    this.filterArray(value)
    this._input = value
  }


  filteredArray: Array<Array<string>> = []


  filterArray(data: string) {

    this.filteredArray

    this.filteredArray = this.cardArray.filter(i => i[0].toLowerCase().startsWith(data.toLowerCase()))

    console.log(this.filteredArray)
  }



  cardArray = [["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "1"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "2"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "3"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7465318/file/original-fbc40ae26df8552d25fc97ef074528a4.png?compress=1&resize=450x338&vertical=top", "4"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "5"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "6"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "7"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "8"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "9"],

  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "10"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "11"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "12"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "13"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "14"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "15"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "16"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "17"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "18"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "19"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "20"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "21"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "22"],
  ["Title1", "", "Ramu", "PRO", "326", "2500", "https://cdn.dribbble.com/userupload/7460179/file/original-041d3fe65f93ca673fbfc9708ee384e2.jpg?compress=1&resize=450x338&vertical=top", "23"],
  ["Title2", "", "Rahul", "Team", "262", "3200", "https://cdn.dribbble.com/userupload/7461890/file/original-c7a74d1824a838232df0cc34087721cc.png?compress=1&crop=788x1094-3715x3289&resize=450x338&vertical=top", "24"],]

}
