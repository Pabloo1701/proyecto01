import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  //declaraciones
  id: string;
  doc: any;
  
  //BASE 
  ingreso: {id: string; nombre: string; telefono: string; correo:string; detalle:string;}[]
  insertar: {estado: string;}[];


  constructor(
    //Iniciar Firestore 
   private firestore : AngularFirestore
  ) { }

  ngOnInit() {
  this.firestore.collection('/ingreso/', ref => ref.where ('estado', '==', "Vigente")).snapshotChanges().subscribe(res=>{
  if(res){
  this.ingreso = res.map(e=>{
        return {
          // recuperar datos
        nombre: e.payload.doc.data()['nombre'],
        telefono: e.payload.doc.data()['telefono'],
        correo: e.payload.doc.data()['correo'],
        detalle: e.payload.doc.data()['detalle'],
        //
        id: e.payload.doc.id
        }
        
      })
      }
    
      })
    
    
    }

}
