import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `
    <div id="scroll-container">
      <div id="scroll-text">{{time}}<div>
    </div>
`,
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  constructor() {
    this.updateTime();
  }

  protected time: string = '';

  updateTime(): void {
    setInterval(() => {
      let _date = new Date();
      this.time = `${[
        (_date.getMonth() + 1).toString().padStart(2, '0'),
        _date.getFullYear(),
        (_date.getDate()).toString().padStart(2, '0'),
      ].join('/')} ${_date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
      this.updateTime();
    }, 1000);
  }
}
