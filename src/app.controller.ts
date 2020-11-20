import {
  Controller,
  Render,
  Get,
  Post,
  Param,
  NotFoundException,
  Body,
  Res,
  UseFilters
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { UrlType } from './@types';
import { CreateUrlDto } from './dto/create-url.dto'
import { HttpExceptionFilter } from './http-exception.filter';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async get() {
    return {};
  }

  @Get(':alias')
  @UseFilters(new HttpExceptionFilter())
  async getByAlias(@Param('alias') alias: string, @Res() res: Response) {
    
    const urlDocument = await this.appService.get(alias)

    if (urlDocument) {
      res.redirect(urlDocument.url)
    }

    throw new NotFoundException();
  }

  @Post('/shorten')
  async create(@Body() data: CreateUrlDto): Promise<UrlType> {
    return await this.appService.create(data);
  }
}
