import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

function validateEnvVars() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not defined');
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
}

async function bootstrap() {
  validateEnvVars();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 80);
}
bootstrap();
