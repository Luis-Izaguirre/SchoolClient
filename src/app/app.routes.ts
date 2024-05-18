import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', component:HomeComponent, pathMatch: 'full' },
    { path: 'course', component:CourseComponent },
    { path: 'courseStudents/:id', component:StudentComponent },
    { path: 'login', component:LoginComponent}
];
