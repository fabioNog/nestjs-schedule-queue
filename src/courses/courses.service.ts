import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { response } from 'express';
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
        const findCourse = this.courses.find((course: Course) => course.id === Number(id));
        if(!findCourse){
            throw new HttpException(
                `Course ID ${id} not found`,
                HttpStatus.NOT_FOUND
            );
        }
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
