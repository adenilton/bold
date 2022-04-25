import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }), AccountModule,
  TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
