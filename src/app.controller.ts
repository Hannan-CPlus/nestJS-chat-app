import { channel } from 'diagnostics_channel';
import { PusherService } from './pusher.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly pusherService: PusherService) {}
  @Get() // This will handle GET requests to the root URL
  getHome(): string {
    return 'Server is running!';
  }
  @Post('messages')
  async messages(
    @Body('username') username: string,
    @Body('message') message: string,
  ) {
    await this.pusherService.trigger('chat', 'message', {
      username,
      message,
    });
    return { success: true, message: 'Message sent successfully' };
  }
}
