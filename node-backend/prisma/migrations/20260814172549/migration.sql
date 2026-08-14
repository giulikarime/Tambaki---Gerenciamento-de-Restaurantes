/*
  Warnings:

  - You are about to drop the `Supllier` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SupplierProducts" DROP CONSTRAINT "SupplierProducts_supplierId_fkey";

-- DropTable
DROP TABLE "Supllier";

-- CreateTable
CREATE TABLE "Supplier" (
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

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "cost_price" DOUBLE PRECISION NOT NULL,
    "category" "ProductsCategory" NOT NULL,
    "brand" VARCHAR(150) NOT NULL,
    "allergens" "Allergens"[],
    "stock_quantity" INTEGER NOT NULL,
    "unit_of_measure" VARCHAR(50) NOT NULL,
    "current_stock" INTEGER NOT NULL,
    "min_stock" INTEGER NOT NULL,
    "manufacture_date" TIMESTAMP(3) NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "category" "MenuCategory" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "id" SERIAL NOT NULL,
    "table_number" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "status" "TableStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "total_value" DOUBLE PRECISION NOT NULL,
    "service_type" "ServiceType" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "menuId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_company_name_cnpj_email_key" ON "Supplier"("company_name", "cnpj", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Order_tableId_key" ON "Order"("tableId");

-- AddForeignKey
ALTER TABLE "SupplierProducts" ADD CONSTRAINT "SupplierProducts_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "StoreUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "StoreUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "StoreUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "StoreUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
