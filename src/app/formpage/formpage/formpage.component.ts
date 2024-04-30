import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css'] // Corrected typo in styleUrls
})
export class FormpageComponent implements OnInit {

  formcontrol!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formcontrol = this.fb.group({
      password: ['', Validators.required]
    });
  }

  addProduct() { // Corrected method name to follow camelCase convention
    console.log(this.formcontrol.value);
  }
}
