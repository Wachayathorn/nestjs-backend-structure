import { Inject, Injectable, Logger } from '@nestjs/common';
import { RedisClient } from '@nestjs/microservices/external/redis.interface';
import { PostHelloRequestDto } from './dto/request';
import { PostHelloResponseDto } from './dto/response';
const JWTR = require('jwt-redis').default;

@Injectable()
export class ExampleService {
    private readonly logger = new Logger(ExampleService.name);
    private readonly jwtr;

    constructor(
        @Inject('REDIS_CONNECTION')
        private readonly redisClient: RedisClient,
    ) {
        this.jwtr = new JWTR(this.redisClient);
    }

    public async getHello(): Promise<string> {
        try {
            return 'Hello World !';
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }

    public async postHello(body: PostHelloRequestDto) {
        try {
            return Object.assign(new PostHelloResponseDto(), { response: body.data });
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}