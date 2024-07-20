import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  private users: { email: string; number: string }[];

  constructor() {
    const dataPath = path.join(__dirname, 'users.json');
    this.users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  }

  async findUsers(
    email: string,
    number: string | undefined,
    signal: AbortSignal,
  ) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        const results = this.users.filter(
          (user) =>
            user.email.includes(email) &&
            (!number || user.number.includes(number)),
        );
        resolve(results);
      }, 5000);

      signal.addEventListener('abort', () => {
        clearTimeout(timeout);
        reject(new Error('Запрос был отменен'));
      });
    });
  }
}
