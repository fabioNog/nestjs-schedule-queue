import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

import {CreateCourseDto} from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseServices: CoursesService) {}

  @Get()
  findAll() {
    return this.courseServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseServices.findOne(id);
  } 

  @Post()
    create(@Body() CreateCourseDto: CreateCourseDto){
        return this.courseServices.create(CreateCourseDto);
    }

  /* @Post()
  create(@Body('name') body) {
    return this.courseServices.create(body);
  }*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.courseServices.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseServices.remove(id);
  }
}
