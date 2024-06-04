import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    MatCheckbox,
    MatTabGroup,
  ],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.scss',
})
export class Component2Component implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    accept: [true],
  });

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.myForm.get('accept')?.setValue(false), 2000);
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
