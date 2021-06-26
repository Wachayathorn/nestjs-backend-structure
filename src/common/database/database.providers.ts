import { ConfigService } from '@nestjs/config';
import { Connection, createConnection } from 'typeorm';
import { createClient, RedisClient } from 'redis';

export const databaseProviders = [
    {
        provide: 'TYPEORM_CONNECTION',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService): Promise<Connection> => {
            return createConnection(configService.get('typeormConnection'))
        }
    },
    {
        provide: 'REDIS_CONNECTION',
        useFactory: async (): Promise<RedisClient> => createClient(process.env.REDIS_SERVER)
    },
];
