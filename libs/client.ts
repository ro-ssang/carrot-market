import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

client.user.create({
  data: {
    email: 'test@test.com',
    name: 'hi',
  },
});
