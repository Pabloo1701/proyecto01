import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

//control formulario 
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-par',
  templateUrl: './par.page.html',
  styleUrls: ['./par.page.scss'],
})
export class ParPage implements OnInit {

  doc: any;
  insertar:{nombre: string ; telefono: string ; correo: string ; detalle: string;};

  constructor(
    private firestore: AngularFirestore ,
    public formBuilder: FormBuilder ,

    private route: ActivatedRoute,
    private router: Router){ } 


  ngOnInit() {

   this.insertar = {nombre : '', telefono:  '', correo: '', detalle: ''}
  }


  guardar(nombre, telefono, correo, detalle =null){
   let insertar={}
   insertar['nombre'] = nombre
   insertar['telefono'] = telefono
   insertar['correo'] = correo
   insertar['detalle'] = detalle
   this.firestore.collection('/ingreso/').add(insertar).then (() => {
    this.insertar = {nombre :  '', telefono: '', correo: '', detalle: ''}
      
    })
    this.router.navigateByUrl('home');
  







  }
}

