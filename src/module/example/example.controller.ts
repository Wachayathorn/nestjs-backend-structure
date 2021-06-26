import { Body, Controller, Get, HttpStatus, Logger, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostHelloRequestDto } from './dto/request';
import { PostHelloResponseDto } from './dto/response';
import { ExampleService } from './example.service';

@ApiTags('Module')
@Controller('module')
export class ExampleController {
    private readonly logger = new Logger(ExampleController.name);
    constructor(private readonly exampleService: ExampleService) { }

    @Get()
    @ApiOperation({ summary: 'Get Hello World' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Get Hello World Success', type: String })
    public async getHello(@Req() req, @Res() res): Promise<any> {
        try {
            this.logger.verbose('Get Hello World');
            const response = await this.exampleService.getHello();
            res.status(HttpStatus.OK).json(response);
        } catch (error) {
            res.status(error.getStatus()).send(error.getResponse());
        }
    }

    @Post()
    @ApiOperation({ summary: 'Post Hello World' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Post Hello World Success', type: PostHelloResponseDto })
    public async postHello(@Body() body: PostHelloRequestDto, @Req() req, @Res() res): Promise<any> {
        try {
            this.logger.verbose('Post Hello World');
            const response = await this.exampleService.postHello(body);
            res.status(HttpStatus.OK).json(response);
        } catch (error) {
            res.status(error.getStatus()).send(error.getResponse());
        }
    }
}
