import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Define CORS options
  const corsOptions = {
    origin: [process.env.REACT_APP_FRONTEND, 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Add OPTIONS here
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization', // Make sure headers are allowed
  };

  // Enable CORS with the options
  app.enableCors(corsOptions);

  await app.listen(process.env.PORT ?? 8000);
}

bootstrap();
