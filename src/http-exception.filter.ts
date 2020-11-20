import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException
} from '@nestjs/common';

@Catch(NotFoundException)
export class HttpExceptionFilter<NotFoundException> implements ExceptionFilter {

  catch(exception: NotFoundException, host: ArgumentsHost) {
    host
      .switchToHttp()
      .getResponse()
      .send('Not found. Go to <a href="/">main page<a/>');
  }
}
