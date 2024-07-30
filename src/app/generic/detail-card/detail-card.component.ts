import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() likes: string = '';
  @Input() comments: string = '';
  @Input() description: string = '';
  @Input() gitLink: string = '';
  @Input() browserLink: string = '';
}

