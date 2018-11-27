import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  experience: Object;
  skills: Object;
  edu: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEdu().subscribe(records => {
      this.edu = records
      console.log(this.edu)
    })

    this.data.getSkills().subscribe(records => {
      this.skills = records
      console.log(this.skills)
    })

    this.data.getExperience().subscribe(records => {
      this.experience = records
      console.log(this.experience)
    })
  }

}
