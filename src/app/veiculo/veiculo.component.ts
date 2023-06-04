import { Component, OnInit } from '@angular/core';
// import firebase from 'firebase/compat/app';
import { VeiculoService } from '.././veiculo.service';
import { Veiculo } from '.././veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
})
export class VeiculoComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit() {
    this.loadVeiculos();
  }

  loadVeiculos() {
    this.veiculoService.getAllVeiculos().subscribe((changes) => {
      this.veiculos = changes.map((action) => {
        const data = action.payload.doc.data() as Veiculo;
        data.id = action.payload.doc.id;
        return data;
      });
    });
  }
}
