// NestJS
import { ExecutionContext, Injectable } from '@nestjs/common';
// GraphQL
import { GqlExecutionContext } from '@nestjs/graphql';
// Passport Middleware
import { AuthGuard } from '@nestjs/passport';

// Authorization user with Token
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return req;
  }
}
