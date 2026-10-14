import { Controller, Get, Param, Query, Post,Body,Patch } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //static route must come before dynamic
  //static
  @Get(`all`) //route: ---/user/all 
  getUsers(){
    return [{
      "Name":"Adnan Raad",
      "ID": "23-54445-3",
      "Age" : "32",
    }]
  }

  //dynamic: parameters decorators
  //Param Decorator
  @Get(`:name`)
  getUserByName(@Param(`name`) name:string){
    return `Name : ${name}`;
  }

  //Query Decorator: Filtering,sorting,ordering
  // URL: GET /user?role=admin
  @Get()
  getUserByRole(@Query(`role`) role:string){
    return `Fetching all users where role:${role}`;
  }

  /*Body Decorator: 
  extract the incoming JSON data from the HTTP request body and 
  automatically turn it into a usable object or DTO inside code*/
  @Post('createuser')
  createUser(@Body() user: CreateUserDto) {
  return {
    message: 'User data received successfully',
    name: user.name,
    id: user.id,
    age: user.age,
    gender: user.gender,
    email: user.email,
    address: user.address,
    isBangladeshi: user.isBangladeshi,
  };
}
  @Post(':id')
  getUserById(@Param('id') id: string) {
  return `ID : ${id}`;
  }
  //update user
  @Patch('update-user/:id')
updateUser(
  @Param('id') id: string,
  @Body() user: UpdateUserDto,
) {
  return {
    message: 'Update data received',
    id: id,
    name: user.name,
    age: user.age,
    gender: user.gender,
    email: user.email,
    address: user.address,
    isBangladeshi: user.isBangladeshi,
  };
}
}
