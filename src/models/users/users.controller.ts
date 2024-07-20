import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { SearchDto } from './dto/search.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('search')
  async search(
    @Query() query: SearchDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const abortController = new AbortController();

    req.on('close', () => {
      console.log('Соединение закрыто клиентом');
      abortController.abort();
    });

    try {
      const result = await this.usersService.findUsers(
        query.email,
        query.number,
        abortController.signal,
      );
      res.json(result);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request aborted:', error.message);
        res.status(499).json({ message: 'Request aborted' });
      } else {
        console.error('Error during user search:', error);
        res.status(500).json({ error: error.message });
      }
    }
  }
}
