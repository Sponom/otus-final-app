import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_URL, DB_OPTIONS } from './db/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Url, UrlSchema } from './schemas/url.schema';


const imports = [
  MongooseModule.forRoot(DB_URL, DB_OPTIONS),
  MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])
];

@Module({
  imports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {};
