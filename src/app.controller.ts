import { channel } from 'diagnostics_channel';
import { PusherService } from './pusher.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly pusherService: PusherService) {}
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
