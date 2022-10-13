import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Login } from 'src/app/Data/models/login';
import { Respuesta } from 'src/app/Data/models/respuesta';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    hide = true;
    formGroup: FormGroup;
    get getForm(){return this.formGroup.controls}

    constructor(private formBuilder:FormBuilder) { }

    ngOnInit() { 
        this.formGroup =  this.formBuilder.group({
            correo:['',Validators.required],
            clave:['',]

        });
    }
    iniciarSesion():void{
        const model=this.formGroup.value as Login
        
        if(this.formGroup.valid){
            alert('Formulario  valido');
            console.log('Formulario   valido');

            
        }else{
            alert('Formulario no valido');
            console.log('Formulario  no valido');
        }
    }
}