import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';


async function bootstrap() {
  const looger = new Logger('Main');
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  const options = new DocumentBuilder()
    .setTitle('API Documents')
    .setDescription('API Documents')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFile('swagger.json', JSON.stringify(document), (err) => { });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.HPPT_PORT, () => {
    looger.verbose(`Server is running on port : ${process.env.HPPT_PORT}`);
  });
}
bootstrap();
