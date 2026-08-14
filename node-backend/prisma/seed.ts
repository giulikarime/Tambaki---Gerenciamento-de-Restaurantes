import { prisma } from "../src/lib/prisma.js"

try {
    await prisma.user.deleteMany();
    await prisma.storeUnit.deleteMany();
    console.log("Data deleted successfully.");
}catch (error) {
    console.error("Error deleting data:", error);
}

const newStore = await prisma.storeUnit.create({
 data: {
     company_name:"Doce Sabor Ltda",
     trade_name:"Doce Sabor",
     cnpj: "71620793000110",
     adress:"Rua Chico Bento,123,Jardim Itaim Bibi,São Paulo/SP",
     email:"docesabor@email.com",
     phone:"11923456789",
 },
})

//  const newUser = await prisma.user.createMany({
//  data: [
//      {
//          name: "Virginia Silva", cpf: "11122233344", email: "virginia@email.com", phone: "11987654123", password: "senha123", role: "Gerente",
//          acess_level: "Pleno", employ_type: "CLT", shift: "Manha", hire_date: new Date("2024-04-15"), weekly_hours: 40, salary: 3500.0,
//          bankName: "Nubank", active: true, storeUnitId: 7,
//      },
//      {
//          name: "Yuri Monteiro", cpf: "12322233344", email: "yuri@email.com", phone: "11987908123", password: "senha134", role: "Garçom",
//          acess_level: "Junior", employ_type: "CLT", shift: "Tarde", hire_date: new Date("2025-03-25"), weekly_hours: 30, salary: 1800.0,
//          bankName: "Inter", active: true, storeUnitId: 7,
//      },
//      {
//          name: "Lana Sousa", cpf: "45678233344", email: "lana@email.com", phone: "11912354123", password: "senha156", role: "Estoquista",
//          acess_level: "Pleno", employ_type: "PJ", shift: "Noite", hire_date: new Date("2024-11-03"), weekly_hours: 44, salary: 2200.0,
//          bankName: "Nubank", active: true, storeUnitId: 7
//          ,
//      },
//  ],
//  });



console.log(newStore);
// console.log(newUser);

await prisma.$disconnect();