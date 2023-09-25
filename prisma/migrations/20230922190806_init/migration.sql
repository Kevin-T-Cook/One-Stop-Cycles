-- CreateTable
CREATE TABLE "Bikes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "totalInventory" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Bikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "vender" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "vender" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bikes_title_key" ON "Bikes"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Part_title_key" ON "Part"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Accessory_title_key" ON "Accessory"("title");
