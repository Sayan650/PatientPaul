
import { PrismaClient } from '@prisma/client';

// This approach is taken from the NextJS docs to prevent
// multiple instances of Prisma Client in development

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({
  log: ['error', 'warn'],
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
