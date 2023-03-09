import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ['Brand New','Second Hand','Refurbished'];
  productForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private api:ApiService, private dialogRef:MatDialogRef<DialogComponent>){}

  ngOnInit(): void{
    this.productForm = this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      date:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
      Comment:['',Validators.required],
    })
  }
  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("product added succussfully");
          this.productForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("Error while adding product")
        }
        
        
      })
    }
  }
}
