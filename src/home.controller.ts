import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get() // This will handle GET requests to the root URL
  getHome(): string {
    return `Server is running! ${process.env.REACT_APP_FRONTEND}`;
  }
}
