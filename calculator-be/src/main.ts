import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '/../secrets', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '/../secrets', 'cert.pem')),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.enableCors();
  await app.listen(3001);
}
bootstrap();
