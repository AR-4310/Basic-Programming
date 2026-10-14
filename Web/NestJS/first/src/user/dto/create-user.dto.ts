import { Type } from 'class-transformer'; 
import { 
  IsString, 
  IsInt, 
  IsNotEmpty, 
  MaxLength, 
  MinLength, 
  Max, 
  Min, 
  IsEmail, 
  IsBoolean, // Fixed typo: 'IsBoolen' -> 'IsBoolean'
  Matches, 
} from 'class-validator'; 

export class CreateUserDto { 
  @IsString() 
  @IsNotEmpty({ message: 'Name should not be empty' }) 
  @MaxLength(30) 
  name: string; 

  @IsNotEmpty() 
  @IsString() 
  @MinLength(5) 
  @MaxLength(30) 
  id: string; 

  @IsInt() 
  @IsNotEmpty() 
  @Max(100) 
  @Min(18) 
  @Type(() => Number) // Converts string inputs from query/params to numbers if needed
  age: number; 

  @IsString() 
  @IsNotEmpty() 
  gender: string; 

  @IsString() 
  @IsEmail() 
  @IsNotEmpty() 
  email: string; 

  @IsString() 
  @IsNotEmpty() 
  @MaxLength(1000) 
  address: string; 

  @IsBoolean() 
  @IsNotEmpty() 
  isBangladeshi: boolean; 
  
  @Matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  {
    message: 'Password should contain at least one special character, one number, one uppercase and one lowercase',
  }
  )
  password: string;
}
