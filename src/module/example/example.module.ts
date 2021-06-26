import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthMiddleware } from '../../common/middleware';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleWebsocketModule } from './websocket/example.websocket.module';

@Module({
    imports: [ExampleWebsocketModule],
    controllers: [ExampleController],
    providers: [ExampleService],
})
export class ExampleModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(ExampleController);
    }
}