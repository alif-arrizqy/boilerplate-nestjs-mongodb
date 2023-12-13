import { User } from '../entities/user.entity';
import { AbsGenericRepository } from './generic-repository.abstract';

export abstract class AbsDataServices {
  abstract users: AbsGenericRepository<User>;
}
