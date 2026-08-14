-- CreateEnum
CREATE TYPE "AcessLevel" AS ENUM ('Master', 'Senior', 'Pleno', 'Junior');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Mesa', 'Balcao');

-- CreateEnum
CREATE TYPE "MenuCategory" AS ENUM ('Prato', 'Sobremesa', 'Bebidas');

-- CreateEnum
CREATE TYPE "EmployType" AS ENUM ('CLT', 'Temporario', 'PJ');

-- CreateEnum
CREATE TYPE "ShiftType" AS ENUM ('Manha', 'Tarde', 'Noite', 'Full_Time');

-- CreateEnum
CREATE TYPE "TableStatus" AS ENUM ('Livre', 'Ocupado', 'Reservado');

-- CreateEnum
CREATE TYPE "ProductsCategory" AS ENUM ('Carnes', 'Hortifrúti', 'Laticínios', 'Embutidos', 'Secos', 'Limpeza');

-- CreateEnum
CREATE TYPE "Allergens" AS ENUM ('Laticinios', 'Glúten', 'Oleaginosas', 'Frutos_do_mar');

-- CreateTable
CREATE TABLE "StoreUnit" (
    "id" SERIAL NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "trade_name" VARCHAR(255) NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "id_unit" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cpf" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "password" VARCHAR(10) NOT NULL,
    "role" VARCHAR(150) NOT NULL,
    "acess_level" "AcessLevel" NOT NULL,
    "employ_type" "EmployType" NOT NULL,
    "shift" "ShiftType" NOT NULL,
    "hire_date" TIMESTAMP(3),
    "weekly_hours" INTEGER,
    "salary" DECIMAL(10,2),
    "bankName" VARCHAR(150),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "storeUnitId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeDocument" (
    "id" SERIAL NOT NULL,
    "documentType" TEXT NOT NULL,
    "file_Url" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL,
    "valid_until" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "EmployeDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supllier" (
    "id" SERIAL NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "trade_name" VARCHAR(255) NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "businnes_hours" TEXT NOT NULL,
    "resposible_name" VARCHAR(255) NOT NULL,
    "payment_terms" TEXT NOT NULL,
    "lead_time_days" INTEGER NOT NULL,

    CONSTRAINT "Supllier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplierProducts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "supplierId" INTEGER NOT NULL,

    CONSTRAINT "SupplierProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreUnit_company_name_cnpj_key" ON "StoreUnit"("company_name", "cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_cpf_key" ON "User"("email", "cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Supllier_company_name_cnpj_email_key" ON "Supllier"("company_name", "cnpj", "email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_storeUnitId_fkey" FOREIGN KEY ("storeUnitId") REFERENCES "StoreUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeDocument" ADD CONSTRAINT "EmployeDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierProducts" ADD CONSTRAINT "SupplierProducts_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supllier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
