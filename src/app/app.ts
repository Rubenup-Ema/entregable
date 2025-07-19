import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Toolbar } from "./toolbar/toolbar";
import { HttpClient } from '@angular/common/http';
import { Student } from '../shared/entity';
import { CommonModule } from '@angular/common';
import { StudentsTable } from './students-table/students-table';
import { AddForm } from "./add-form/add-form";
import { EditForm } from './edit-form/edit-form';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Toolbar, CommonModule, StudentsTable, AddForm, EditForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  students: Student[] = [];
  studentEdit: Student = {name:'',surname:'', age:0, dni:0,average:0};
  protected title = 'entregable-01';
  studentNew = true;

  constructor(private http: HttpClient,private snackBar: MatSnackBar) {


  }

  ngOnInit(): void {

    this.http.get<Student[]>('mooks/students.json').subscribe(

      (data) => {

        console.log(data);

        this.students = data;

      }

    )
    
  }

  addStudents(student:Student) {

    console.log('adding students')
    this.students = [...this.students, student];
    this.messageBox('Registro agregado');
  }


  deleteStudent(studentToDelete: Student) {


    this.students = this.students.filter(student => student.dni !== studentToDelete.dni);

    this.messageBox('Registro eliminado');

  }

  showEdit(valor:boolean) {

    this.studentNew = valor;

  }

  studentEdited(studentE: Student) {

    console.log('edited', studentE);

    const index = this.students.findIndex(student => student.dni === studentE.dni);

    console.log('Pos ', index);

  if (index !== -1) {

     this.students[index] = {...studentE};
     this.students = [...this.students];
    this.messageBox('Registro editado');
  // this.students[index] = {

  //   ...this.students[index], 
  //   name: studentE.name,
  //   surname: studentE.surname,
  //   age: studentE.age,
  //   average: studentE.average
  // };
  }
    this.showEdit(true);

  }

  editStudent(student:Student) {

    
    this.studentEdit = {name:'',surname:'', age:0, dni:0,average:0};
    
    // this.studentEdit.name = student.name;
    // this.studentEdit.surname = student.surname;
    // this.studentEdit.age = student.age;
    // this.studentEdit.dni= student.dni;
    // this.studentEdit.average = student.average;

    this.studentEdit = student
   
    console.log('Send edit', this.studentEdit);
    
    this.showEdit(false);

  }


  messageBox(texto: string) {

    this.snackBar.open(texto + ' ✅', 'Cerrar', {
    duration: 3000, // ms
    verticalPosition: 'top',  // 'top' | 'bottom'
    horizontalPosition: 'right' // 'start' | 'center' | 'end' | 'left' | 'right'
    
});

  }


}
