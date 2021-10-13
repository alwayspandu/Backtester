import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BtResult } from '../service/data/back-test.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  name = ''

  BtResults = [
    new BtResult(1, 'Straddle EveryDay at 9:30am', new Date(), false),
    new BtResult(2, 'Strangle', new Date(), true),
    new BtResult(1, 'Calender Spread', new Date(), false),
  ]



  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

}
