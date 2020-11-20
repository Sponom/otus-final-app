import { IsUrl, IsNotEmpty } from 'class-validator';
import { Escape, Trim } from 'class-sanitizer';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl({
    require_protocol: true,
    require_valid_protocol: true
  })
  @Trim()
  @Escape()
  url: string;
}
