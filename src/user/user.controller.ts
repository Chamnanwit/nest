import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    createUser(@Body() input: Prisma.UserCreateInput) {
        return this.userService.createUser(input);
    }

    @Get('getAllUser')
    getAllUser() {
        return this.userService.getAllUser();
    }

    @Put(':id')
    updateUser(@Body() body: Prisma.UserUpdateInput, @Param() Param: {id: number}) {
        console.log(Param)
        const id = +Param.id;
        return this.userService.updateUser(body, id);
    }

    @Delete(':id')
    deleteUser(@Param() param: {id: number}) {
        const id = +param.id;
        return this.userService.deleteUser(id);
    }
}
