import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from '../../models/campaign.model';
import { CampanhasService } from '../../services/campanhas.service';

@Component({
  selector: 'app-campanha-detalhe',
  templateUrl: './campanha-detalhe.component.html',
  styleUrls: ['./campanha-detalhe.component.css']
})
export class CampanhaDetalheComponent implements OnInit {
  campanha?: Campaign;
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campanhasService: CampanhasService
  ) {}

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    this.id = idStr ? Number(idStr) : undefined;

    if (!this.id || Number.isNaN(this.id)) {
      this.router.navigate(['/campanhas']);
      return;
    }

    this.campanha = this.campanhasService.getById(this.id);
  }
}
