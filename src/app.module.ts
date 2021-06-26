import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './common/database/database.config';
import { DatabaseModule } from './common/database/database.module';
import { ExampleModule } from './module/example/example.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    ExampleModule
  ]
})
export class AppModule { }
