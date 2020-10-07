import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  events: Array<any> = [];

  constructor(private gtmService: GoogleTagManagerService) { }

  ngOnInit(): void {
    window.parent.postMessage({ type: 'initialized' }, '*');
    window.parent.postMessage(
      { type: 'sizeChanged', data: { height: 300 } },
      '*'
    );

    window.addEventListener('message', (event) => {
     // this.handleEvent(event);
    });
  }

  handleEvent(event: any) {
    console.log('=== event received: ', event);
    const gtmTag = {
      event: '',
      data: '',
    };
    if (event.data.eventType === 'component_context') {
      gtmTag.event = 'reset_cart';
      gtmTag.data = event.data.keys.experienceId;
      this.gtmService.pushTag(gtmTag);
      alert('this is a custom event: ' + event.data.eventType);
    }
    if (event.data.eventType === 'cart_component_init') {
      gtmTag.event = event.data.eventType;
      gtmTag.data = event.data.keys.order.orderId;
      this.gtmService.pushTag(gtmTag);
      alert('this is a custom event: ' + event.data.eventType);
    }
    if (event.data.eventType === 'cart_reset') {
      gtmTag.event = 'reset_cart';
      gtmTag.data = event.data.keys.order.orderId;
      this.gtmService.pushTag(gtmTag);
      alert('this is a custom event: ' + event.data.eventType);
    }


  }

  handleClick() {
    const gtmTag = {
      event: '',
      data: '',
    };
    gtmTag.event = 'reset_cart';
    gtmTag.data = "001";
    this.gtmService.pushTag(gtmTag);
    alert('this is a custom event: click btn');
  }
}
