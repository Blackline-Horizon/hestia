import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHestia(): string {
    return 'Reporting from Hestia Service!';
  }
}
