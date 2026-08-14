import { prisma } from './src/lib/prisma.js';

async function getUnit() {
    const units = await prisma.storeUnit.findMany();
    console.log(units)

}
getUnit()

async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users)

}
getUsers()