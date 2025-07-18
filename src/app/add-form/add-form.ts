import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm implements OnInit {

  studentForm!: FormGroup;
  @Output() studentAdded = new EventEmitter<Student>();
  constructor(private fb: FormBuilder) {

  

  }

  ngOnInit(): void {

    this.studentForm = this.fb.group({

      dni: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      average: ['', [Validators.required, Validators.min(0), Validators.max(100)]]

    })
    
  }

  onSubmit() {

    console.log('Form summited');
    this.studentAdded.emit(this.studentForm.value);


  }

  onReset() {

    this.studentForm.reset();

  }

}
