import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  createContent(createContentDto: CreateContentDto) {
    return 'this action add a new hospital';
  }

  findAll() {
    return this.prisma.content.findMany();
  }

  findOne(id: number) {
    return this.prisma.content.findUnique({ where: { id } });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.prisma.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.content.delete({ where: { id } });
  }
}
