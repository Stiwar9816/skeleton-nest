import { IsArray, IsBoolean, IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UserRoles } from 'src/auth/enums';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsUUID()
  @Field(() => String, {
    description: 'Id automatically generated in integer format eg: 1,2,3..',
  })
  id: string;

  @ApiProperty({
    description: 'User role wich can Administrator, User by default takes the user role',
    nullable: false,
    type: 'string',
  })
  @IsString()
  @Field(() => String, {
    description: 'User roles wich can Administrator, User by default takes the user role',
  })
  role: string;

  @ApiProperty({
    description: 'User role wich can Administrator, User by default takes the user role',
    nullable: false,
    type: 'boolean',
  })
  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, {
    description: 'User roles wich can Administrator, User by default takes the user role',
  })
  isActive?: boolean;
}
