import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT', 3001);

    app.enableCors({
        origin: 'http://localhost:3000', // Allow requests from frontend
        methods: 'GET,PUT,POST,PATCH,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
    });
    await app.listen(port);
}
bootstrap();
