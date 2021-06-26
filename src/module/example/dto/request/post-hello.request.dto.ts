import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PostHelloRequestDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Hello World' , type : String })
    data: string;
}