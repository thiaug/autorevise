import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Veiculo } from '../veiculo.service';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  private veiculosCollection: AngularFirestoreCollection<Veiculo>;

  constructor(private afs: AngularFirestore) {
    this.veiculosCollection = this.afs.collection<Veiculo>('veiculos');
  }

  getAllVeiculos(): Observable<DocumentChangeAction<Veiculo>[]>{
    return this.veiculosCollection.snapshotChanges();
  }

  getVeiculoById(id: string): Observable<Veiculo | undefined>{
    return this.veiculosCollection.doc<Veiculo>(id).valueChanges();
  }

  addVeiculo(veiculo: Veiculo): Promise<void>{
    return this.veiculosCollection.add(veiculo).then(ref =>{
      veiculo.id = ref.id;
      return ref.update({id: ref.id});
    });
  }

  updateVeiculo(veiculo: Veiculo): Promise<void>{
    const id = veiculo.id;
    delete veiculo.id;
    return this.veiculosCollection.doc<Veiculo>(id).update(veiculo);
  }
  
  deleteVeiculo(id: string): Promise<void>{
    return this.veiculosCollection.doc<Veiculo>(id).delete();
  }
}
