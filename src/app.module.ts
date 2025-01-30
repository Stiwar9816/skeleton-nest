import { join } from 'path';
// NestJS
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
// GraphQL
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
// Modules
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
// Config
import { envs } from './config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    // Configuración de credenciales de la DB
    TypeOrmModule.forRoot({
      type: 'postgres',
      ssl:
        envs.state === 'prod'
          ? {
              rejectUnauthorized: false,
              sslmode: 'require',
            }
          : (false as any),
      host: envs.db_host,
      port: +envs.db_host,
      database: envs.db_name,
      username: envs.db_username,
      password: envs.db_password,
      autoLoadEntities: true,
      synchronize: true,
    }),
    // GraphQL
    // TODO: Configuración básica
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      csrfPrevention: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    UserModule,
    MailModule,
  ],
})
export class AppModule {}
