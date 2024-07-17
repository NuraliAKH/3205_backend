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

  async findUsers(email: string, number?: string) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return this.users.filter(
        (user) =>
          user.email.includes(email) &&
          (!number || user.number.includes(number)),
      );
    } catch (error) {
      console.error('Error during user search:', error);
      throw error;
    }
  }
}
