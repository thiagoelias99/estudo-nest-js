import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DbConfigService } from './config/db.config.service'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        UsersModule, 
        ProductsModule,
        TypeOrmModule.forRootAsync({
            useClass: DbConfigService,
            inject: [DbConfigService]
        }),
        ConfigModule.forRoot({
            isGlobal: true
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
