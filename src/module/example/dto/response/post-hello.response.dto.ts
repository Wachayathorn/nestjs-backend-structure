import { ApiProperty } from '@nestjs/swagger';

export class PostHelloResponseDto {
    @ApiProperty({ example: 'Hello World' , type : String })
    response: string;
}