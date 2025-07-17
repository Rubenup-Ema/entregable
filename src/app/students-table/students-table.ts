import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Student } from '../../shared/entity';
import { FullnamePipe } from '../fullname-pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, FullnamePipe, MatIconModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {

  @Input() students: Student[] = [];
  @Output() studentEdit= new EventEmitter<Student>();
  @Output() studentDelete= new EventEmitter<Student>();

  displayedColumns: string[] = ['name', 'surname', 'fullname', 'age', 'dni', 'average', 'acciones']

  onDelete(student: Student){

    this.studentDelete.emit(student);

  }

  onEdit(student: Student){

    console.log(student);

    let editStudent!: Student;

    editStudent = { ...student };

    // editStudent.name = student.name;
    // editStudent.surname = student.name;
    // editStudent.dni = student.dni;
    // editStudent.age = student.age;
    // editStudent.average = student.average;
    
    console.log(editStudent);

    this.studentEdit.emit(editStudent);

  }

}

