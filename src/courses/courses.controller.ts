import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(){
        return 'Listagem de Cursos';
    }

    @Get(':id')
    findOne(@Param() params){
        return `Curso # ${params.id}`
    }

    /*@Post()
    create(@Body() body){
        return body
    }*/

    @Post()
    create(@Body('name') body){
        return body
    }
}
