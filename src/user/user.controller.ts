import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  // get uyser
  @Get()
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: name || 'Hazem' },
      { id: 1, name: 'bakr' },
    ];
    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return users;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'John Doe' };
  }
}
