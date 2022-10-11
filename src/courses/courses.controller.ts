import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
/*    @Get()
    findAll(){
        return 'Listagem de Cursos';
    }*/

    @Get()
    findAll(@Res() response){
        return response.status(200).send('Listagem de Cusos');
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
