import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
    Res
     } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseServices: CoursesService){
        
    }
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

    @Patch(':id')
    update(@Param('id') id:string,@Body() body){
        return `Atualizaçao #${id}`
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `Removendo curso #${id}`
    }
}
