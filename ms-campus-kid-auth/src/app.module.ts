import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth';

@Module({
  imports: [
    ConfigModule.forRoot(),
    (() => {
      const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, NODE_ENV } = process.env;

      const connectionString = NODE_ENV == 'production' ?
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&authSource=admin` :
        `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

      return MongooseModule.forRoot(connectionString)
    })(),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
