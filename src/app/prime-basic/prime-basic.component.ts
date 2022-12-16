import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-prime-basic',
  templateUrl: './prime-basic.component.html',
  styleUrls: ['./prime-basic.component.css'],
  providers: [MessageService],
})
export class PrimeBasicComponent implements OnInit {
  dob: Date = new Date(); // gives current date
  minDateValue: Date = new Date('11/16/2022');
  maxDateValue: Date = new Date('11/24/2022');
  invalidDates = [this.minDateValue, this.maxDateValue];
  datevalue = [this.minDateValue, this.maxDateValue];
  firstName = '';
  constructor(private msgservice: MessageService) {}

  ngOnInit(): void {}
  selectDateRange(event: any) {
    console.log('val', event, this.datevalue);
  }
  showToast() {
    this.msgservice.add({
      key: 'btmright',
      severity: 'success',
      summary: 'Heading',
      detail: 'Message Content',
      //sticky: true,
      life: 2000,
    });
  }
  showConfirmed() {
    this.msgservice.add({
      key: 'c',
      severity: 'success',
      summary: 'Heading',
      detail: 'Are u sure?',
      //sticky: true,
    });
  }
  onReject() {
    console.log('Rejecting clicked');
    this.msgservice.clear('c');
  }
  onConfirm() {
    console.log('confirm clicked');
    this.msgservice.clear('c');
  }
}
