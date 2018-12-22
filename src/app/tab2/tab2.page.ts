import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    constructor(private http: HttpClient) { }

    const url = 'http://muslimsalat.com/daily/germantown,md/false/4.json?daylight=true&key=1c3a4c02e05270965adc5a20f0038092';
    const fajr = '';
    const dhuhr = '';
    const asr = '';
    const maghrib = '';
    const isha = '';
    // called on demand by Angular
    ngOnInit() {
        this.http.get(this.url).subscribe(
            (result) => {
                console.log(result);
            }
        )
        this.fajr = '6:00';
        this.dhuhr = '12:00';
        this.asr = '3:00';
        this.maghrib = '5:00';
        this.isha = '6:15';
    }
}
