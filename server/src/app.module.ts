import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

import { AuthorizedModule } from './modules/authorized/authorized.module'
import { ProductsModule } from './modules/products/products.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { UsersService } from './users/users.service'

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthorizedModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
