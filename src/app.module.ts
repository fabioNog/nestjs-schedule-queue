import { decorator } from '@babel/types';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursesModule } from './curses/curses.module';

//decorator
@Module({
  imports: [CursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
