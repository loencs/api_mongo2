import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CatModule , MongooseModule.forRoot('mongodb://localhost/mydb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
