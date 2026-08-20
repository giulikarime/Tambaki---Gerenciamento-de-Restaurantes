import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // ajuste pra porta do seu React (Vite=5173, CRA=3000... troque a do Nest se bater)
    credentials: true,
  });

  await app.listen(4000);
}
bootstrap();