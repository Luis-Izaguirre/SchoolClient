import { Component } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  public course: Course[] = [];

  constructor(private http: HttpClient){}

      ngOnInit(){
        this.getCourse();
      }
      
      getCourse() {
        this.http.get<Course[]>(environment.baseUrl + 'api/Courses').subscribe(
          {
            next: result => this.course = result,
            error: error => console.log(error)
          }
        );
      }
}
