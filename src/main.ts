import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS using the REACT_APP_FRONTEND environment variable
  app.enableCors({
    origin: [process.env.REACT_APP_FRONTEND || 'http://localhost:3000'], // Fallback to localhost for local development
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
    credentials: true, // Allow credentials (cookies)
  });

  await app.listen(process.env.PORT ?? 8000); // Default to port 8000 if PORT is not set
}

bootstrap();
