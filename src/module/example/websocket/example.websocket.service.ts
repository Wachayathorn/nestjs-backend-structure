import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { ExampleWebSocketTopic } from "./example.websocket.topic";

@WebSocketGateway()
export class ExampleWebsocketService implements OnGatewayConnection, OnGatewayDisconnect {
    private logger = new Logger(ExampleWebsocketService.name);

    @WebSocketServer()
    private readonly server: Server;

    public handleConnection(client: Socket) {
        this.logger.verbose(`On Connected by socket ID: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.verbose(`On Disconnected by socket ID: ${client.id}`);
    }

    public async sendToClient() {
        this.logger.verbose(`Send to client`);
        const clientId = `1`;
        this.server.emit(ExampleWebSocketTopic.SEND_TO_CLIENT + clientId, "Send from server");
    }
}
