import { Model } from 'mongoose';
import { time as uniqid } from 'uniqid'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url, UrlDocument } from './schemas/url.schema';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlType } from './@types';

@Injectable()
export class AppService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async create(createUrlDto: CreateUrlDto): Promise<UrlType> {
    const existedUrl = await this.urlModel.findOne({url: createUrlDto.url});
    if (existedUrl) {
      return existedUrl;
    }
    
    const alias = uniqid();

    const createdUrl = new this.urlModel({ ...createUrlDto , alias });
    return createdUrl.save();
  }

  async get(alias: string): Promise<UrlType> {
    return this.urlModel.findOne({ alias })
  }
}