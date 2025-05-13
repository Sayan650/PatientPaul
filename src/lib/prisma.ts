
import { PrismaClient, type Prisma } from '@prisma/client'; // Import Prisma namespace for types

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient | undefined;
}

// Define log levels for development and production environments
const prismaDevLogLevels: Array<Prisma.LogLevel | Prisma.LogDefinition> = [
  { emit: 'stdout', level: 'query' },
  { emit: 'stdout', level: 'info' },
  { emit: 'stdout', level: 'warn' },
  { emit: 'stdout', level: 'error' },
];

const prismaProdLogLevels: Array<Prisma.LogLevel | Prisma.LogDefinition> = [
  { emit: 'stdout', level: 'error' }, // Only log errors in production
];

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? prismaDevLogLevels : prismaProdLogLevels,
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
