import { PrismaClient } from '@prisma/client';

// Inicializar Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Crear dos contenidos de ejemplo
  const content1 = await prisma.content.upsert({
    where: { title: 'Contenido sobre extraterrestres' },
    update: {},
    create: {
      title: 'Contenido sobre Extraterrestres',
      description: 'Criaturas ficticias de otro mundo.',
      lastSee: 'Simón Bolívar 1-62 y Manuel Vega',
      countLastSee: 12,
      extinct: false,
    },
  });

  const content2 = await prisma.content.upsert({
    where: { title:'Contenido sobrenatural'},
    update: {},
    create: {
      title: 'Contenido sobrenatural',
      description: 'Criaturas que salen de su tumba por la noche para atormentar a los vivos dandoles un buen susto.',
      lastSee: 'Parque Calderón',
      countLastSee: 5,
      extinct: false,
    },
  });

  console.log({ content1, content2 });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Cerrar Prisma Client al finalizar
    await prisma.$disconnect();
  });
