import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import {
  AcessLevel,
  EmployType,
  PrismaClient,
  ShiftType,
} from '../src/generated/prisma/client.js';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'],
});
const prisma = new PrismaClient({ adapter });

async function main() {

  const storeData = {
    company_name: 'Doce Sabor LTDA',
    trade_name: 'Sabor & Cia',
    cnpj: '12345678000199',
    adress: 'Rua das Flores, 123, Centro',
    email: 'docesabor@email.com',
    phone: '11987654321',
  };

  const storeUnit = await prisma.storeUnit.upsert({
    where: {
      company_name_cnpj: {
        company_name: storeData.company_name,
        cnpj: storeData.cnpj,
      },
    },
    update: storeData,
    create: storeData,
  });

  const users = [
    {
      name: 'Carlos Silva',
      cpf: '12345678901',
      email: 'carlos.gerente@saborecia.com',
      phone: '11911112222',
      password: 'password_1',
      role: 'Gerente Geral',
      acess_level: AcessLevel.Master,
      employ_type: EmployType.CLT,
      shift: ShiftType.Full_Time,
      hire_date: new Date('2023-01-15'),
      weekly_hours: 44,
      salary: 4500.00,
      bankName: 'Banco do Brasil',
      active: true,
    },
    {
      name: 'Ana Souza',
      cpf: '98765432100',
      email: 'ana.souza@saborecia.com',
      phone: '11933334444',
      password: 'password_2',
      role: 'Atendente',
      acess_level: AcessLevel.Junior,
      employ_type: EmployType.CLT,
      shift: ShiftType.Noite,
      hire_date: new Date('2023-06-01'),
      weekly_hours: 36,
      salary: 2100.00,
      bankName: 'Nubank',
      active: true,
    },
  ];
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.upsert({
      where: {
        email_cpf: {
          email: user.email,
          cpf: user.cpf,
        },
      },
      update: { ...user, password: hashedPassword, storeUnitId: storeUnit.id },
      create: { ...user, password: hashedPassword, storeUnitId: storeUnit.id },
    });
  }


  const suppliers = [{
    company_name: 'Fornecedor de Doces LTDA',
    trade_name: 'Doces & Cia',
    cnpj: '33668529000137',
    phone: '11987654322',
    email: 'fornecedor@docesecia.com',
    adress: 'Avenida das Flores, 456, Centro',
    businnes_hours: 'Segunda a Sexta, 9h às 18h',
    resposible_name: 'Luan Santana',
    payment_terms: '25 dias após a entrega',
    lead_time_days: 7
  }];

  for (const supplier of suppliers) {
    await prisma.supplier.upsert({
      where: {
        company_name_cnpj_email: {
          company_name: supplier.company_name,
          cnpj: supplier.cnpj,
          email: supplier.email,
        },
      },
      update: supplier,
      create: supplier,
    });
  }
  console.log(' Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao executar o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });