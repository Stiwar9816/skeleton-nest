// NestJS
import { forwardRef, Module } from '@nestjs/common';
// Passport
import { PassportModule } from '@nestjs/passport';
// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
// Resolvers
import { UserResolver } from './user.resolver';
// Serivces
import { UserService } from './user.service';
// Entities
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  providers: [UserResolver, UserService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    forwardRef(() => AuthModule),
  ],
  exports: [UserService],
})
export class UserModule {}
