import { Injectable } from '@nestjs/common';
import {Course} from '../courses/entities/course.entity'

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Nest',
            description: 'Fundamentos do Framework',
            tags: ['node.js','nest.js','javascript']
        }
    ];

    findAll(){
        return this.courses;
    }

    findOne(id: string){
        return this.courses.find((course: Course) => course.id === Number(id));
    }

    create(createCourseDto: any){
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any){
        const indexCourse = this.courses.findIndex
        ((course:Course) => course.id === Number(id));

        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id:string){
        const indexCourse = this.courses.findIndex
        ((course:Course) => course.id === Number(id));

        if(indexCourse >= 0){
            this.courses.splice(indexCourse,1)
        }
    }
}
