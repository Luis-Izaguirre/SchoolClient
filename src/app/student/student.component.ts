import { Component } from '@angular/core';
import { Student } from './student';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  public students: Student[] = [];
  public displayedColumns: string[] = [ "studentId","studentName","studentEmail","major","studentYear", "population"];
  id: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.id = -1;
  }

    ngOnInit(){
      this.getStudents();
    }

    getStudents() {
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter ? + idparameter : 0;

    this.http.get<Student[]>(`${environment.baseUrl}api/Courses/CoursesStudents/${this.id}`).subscribe(
      {
        next: result => this.students = result,
        error: error => console.log(error)
      }
    );
  }
}
