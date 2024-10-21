import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // optional, specify allowed methods
    credentials: true, // optional, allow credentials (cookies)
  });

  await app.listen(process.env.PORT ?? 8000);
}

bootstrap();
