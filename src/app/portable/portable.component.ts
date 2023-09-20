import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PortableInterface} from "../portable-interface";
import {PortableService} from "../portable.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-portable',
  templateUrl: './portable.component.html',
  styleUrls: ['./portable.component.css']
})
export class PortableComponent implements OnInit {

  portableList: PortableInterface[] = [];
  message: string = '';

  constructor(private portableService: PortableService){}

  ngOnInit() {
    this.getPortables()
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  })

  getPortables(){
    this.portableService.getAll().subscribe(data=>{
      this.portableList = data;
    })
  }

  handleSubmit(){
    this.portableService.addPortable(this.form.value).subscribe({
      complete:()=>{
        this.message = "Portable ajouté";
        this.form.reset();
        this.getPortables();
      },
      error:()=>this.message = "Erreur, portable non créé"
    })
  }

  suppressPortable(id: number, index: number){
    this.portableService.deletePortable(id).subscribe(message=>{
      this.portableList.splice(index, 1);
    })
  }

}
