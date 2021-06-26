import { Module } from '@nestjs/common';
import { ExampleWebsocketService } from './example.websocket.service';

@Module({
    providers: [ExampleWebsocketService],
    exports: [ExampleWebsocketService],
})
export class ExampleWebsocketModule { }
