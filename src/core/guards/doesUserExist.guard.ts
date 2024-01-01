import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthUseCase } from 'src/use-cases/auth/auth.use-case';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly authUseCase: AuthUseCase) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request: any) {
    const userExist = await this.authUseCase.findUserByEmail(
      request.body.email,
    );
    if (userExist) {
      throw new ForbiddenException('Email already exists');
    }
    return true;
  }
}
