import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.css']
})
export class CampaignCardComponent {
  @Input() campanha!: Campaign;

  @Output() remover = new EventEmitter<number>();
}
