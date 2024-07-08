import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:3000', // Allow requests from frontend
        methods: 'GET,PUT,POST,PATCH,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
    });
    await app.listen(3001);
}
bootstrap();
