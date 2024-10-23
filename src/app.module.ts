import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PusherService } from './pusher.service';
import { HomeController } from './home.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the configuration available globally
    }),
  ],
  controllers: [AppController, HomeController], // Add HomeController here
  providers: [PusherService],
})
export class AppModule {}
