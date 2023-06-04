import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { VeiculoService } from '.././veiculo.service';
import { Veiculo } from '.././veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
})
export class VeiculoComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor() {}
  // ERRO AO CHAMAR SERVICO NO CONSTRUTOR !!!!

  ngOnInit() {
    // this.loadVeiculos();
  }

  // ----------------- CARREGA -----------------
  // loadVeiculos() {
  //   this.veiculoService.getAllVeiculos().subscribe((changes) => {
  //     this.veiculos = changes.map((action) => {
  //       const data = action.payload.doc.data() as Veiculo;
  //       data.id = action.payload.doc.id;
  //       return data;
  //     });
  //   });
  // }

  // ----------------- ADICIONA -----------------
  // addVeiculo(veiculo: Veiculo) {
  //   this.veiculoService
  //     .addVeiculo(veiculo)
  //     .then(() => {
  //       console.log('TESTE: Veiculo add');
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao adicionar veículo', error);
  //     });
  // }

  // ----------------- UPDATE -----------------
  // updateVeiculo(veiculo: Veiculo) {
  //   this.veiculoService
  //     .updateVeiculo(veiculo)
  //     .then(() => {
  //       console.log('TESTE: Veiculo Atualizado!');
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao atualizar veículo', error);
  //     });
  // }

  // ----------------- DELETE -----------------
  // deleteVeiculo(id: string) {
  //   this.veiculoService
  //     .deleteVeiculo(id)
  //     .then(() => {
  //       console.log('TESTE: Veiculo Deletado');
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao deletar veiculo');
  //     });
  // }
}
