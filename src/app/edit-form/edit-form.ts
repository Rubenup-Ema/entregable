import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.css'
})
export class EditForm implements OnInit {


  studentForm!: FormGroup;
  @Output() studentEdited = new EventEmitter<Student>();
  @Output() noneStudent = new EventEmitter<boolean>();

   student: Student = { name: '', surname: '', age: 0, dni: 0, average: 0 };

  private _studentEdit!: Student;

  @Input() set studentEdit(value: Student) {

    

    if (value) {
      this._studentEdit = value;
      this.student = { ...value };

      if (this.studentForm) {

        this.loadStudentData();

      }

    }
  }

  constructor(private fb: FormBuilder) {

    

  }

  loadStudentData(): void {
  console.log('llegó algo ',this.student);
  this.studentForm.setValue({
    dni: this.student.dni,
    name: this.student.name,
    surname: this.student.surname,
    age: this.student.age,
    average: this.student.average
  });

}


  ngOnInit() {

    console.log('entro al init');

    this.studentForm = this.fb.group({

      dni: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      average: ['', [Validators.required, Validators.min(0), Validators.max(100)]]

    })

    if (this._studentEdit) {
      this.loadStudentData();
    }
 
  }

  onSubmit() {

    console.log('Form summited');
    this.studentEdited.emit(this.studentForm.value);


  }

  onReset() {

    this.student = { name: '', surname: '', age: 0, dni: 0, average: 0 };
     this.loadStudentData();
    this.noneStudent.emit(true);

  }

}
