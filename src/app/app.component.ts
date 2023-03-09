import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular13Crud';

  constructor(private dialog:MatDialog, private api:ApiService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("error while fetching the record")
      }
    })
  }
}
