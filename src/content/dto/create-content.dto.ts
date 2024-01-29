// create-content.dto.ts
export class CreateContentDto {
    title: string;
    description?: string;
    lastSee: string;
    countLastSee: number;
    extinct: boolean;
    // Agrega cualquier otro campo necesario según tu modelo Prisma
  }
  