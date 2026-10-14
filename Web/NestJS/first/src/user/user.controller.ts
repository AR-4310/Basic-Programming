import { Controller, Get, Param, Query, Post } from '@nestjs/common';
import { UserService } from './user.service.js';

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
  @Post(`:id`)
  getUserById(@Param(`id`) id:Number){
    return `ID : ${id}`;
  }

  //Query Decorator: Filtering,sorting,ordering
  // URL: GET /user?role=admin
  @Get()
  getUserByRole(@Query(`role`) role:string){
    return `Fetching all users where role:${role}`;
  }
}
