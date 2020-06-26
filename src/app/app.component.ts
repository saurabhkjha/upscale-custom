import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  events: Array<any> = [];

  ngOnInit(): void {
    window.parent.postMessage({ type: 'initialized' }, '*');
    window.parent.postMessage(
      { type: 'sizeChanged', data: { height: 300 } },
      '*'
    );

    window.addEventListener('message', (event) => {
      this.handleEvent(event);
    });
  }

  handleEvent(event: any) {
    console.log('event received: ', event);
  }
}
