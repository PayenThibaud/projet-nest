import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

export class PrismaService {
    constructor() {}

    async getPrisma(): Promise<PrismaClient> {
        return prisma;
    }
}