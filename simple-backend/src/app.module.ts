import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';

@Module({
  imports: [UsersModule, 
    TypeOrmModule.forRoot( {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'hieudm1',
      password: 'Iamatwork',
      database: 'nestjs_app',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
