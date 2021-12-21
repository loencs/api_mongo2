import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.catService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(name, updateCatDto);
  }

  @Delete(':name')
  remove(@Param('name')name: string) {
    return this.catService.remove(name);
  }
}
