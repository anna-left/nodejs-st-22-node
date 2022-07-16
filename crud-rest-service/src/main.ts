import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { IUser } from './users/entities/user.entity';

export const usersDB: IUser[] = [];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // transform: true, //here is the "magic"
    }),
  );
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
