import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('DB_BASE_URL'),
            }),
            inject: [ConfigService],
        }),
        UserModule,
        AuthModule,
        TaskModule,
    ],
    providers: [Logger],
})
export class AppModule {
    constructor(
        private readonly logger: Logger,
        private configService: ConfigService,
    ) {
        const dbUrl = this.configService.get<string>('DB_BASE_URL');
        this.logger.log(`Connecting to MongoDB at: ${dbUrl}`);
    }
}
