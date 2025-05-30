import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// main.ts

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
