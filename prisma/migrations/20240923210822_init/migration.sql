-- CreateTable
CREATE TABLE "Users" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "email" TEXT,
    "ProfileName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Creator" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "ProfileName" TEXT,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Events" (
    "Id" SERIAL NOT NULL,
    "Title" TEXT,
    "Artist" TEXT,
    "EventImage" TEXT,
    "Descriptiion" TEXT,
    "Time" TIMESTAMP(3) NOT NULL,
    "EventsId" INTEGER NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "Id" SERIAL NOT NULL,
    "UserTicketId" INTEGER NOT NULL,
    "TicketImage" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "CouponImage" TEXT,
    "CouponId" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL,
    "ExpirationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipts" (
    "id" SERIAL NOT NULL,
    "ReceiptImage" TEXT,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserReceiptId" INTEGER NOT NULL,

    CONSTRAINT "Receipts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_ProfileName_key" ON "Users"("ProfileName");

-- CreateIndex
CREATE UNIQUE INDEX "Creator_ProfileName_key" ON "Creator"("ProfileName");

-- CreateIndex
CREATE UNIQUE INDEX "Events_Title_key" ON "Events"("Title");

-- CreateIndex
CREATE UNIQUE INDEX "Events_EventImage_key" ON "Events"("EventImage");

-- CreateIndex
CREATE UNIQUE INDEX "Events_Descriptiion_key" ON "Events"("Descriptiion");

-- CreateIndex
CREATE UNIQUE INDEX "Events_EventsId_key" ON "Events"("EventsId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_UserTicketId_key" ON "Ticket"("UserTicketId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_TicketImage_key" ON "Ticket"("TicketImage");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_CouponImage_key" ON "Coupon"("CouponImage");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_CouponId_key" ON "Coupon"("CouponId");

-- CreateIndex
CREATE UNIQUE INDEX "Receipts_ReceiptImage_key" ON "Receipts"("ReceiptImage");

-- CreateIndex
CREATE UNIQUE INDEX "Receipts_UserReceiptId_key" ON "Receipts"("UserReceiptId");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_EventsId_fkey" FOREIGN KEY ("EventsId") REFERENCES "Creator"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_UserTicketId_fkey" FOREIGN KEY ("UserTicketId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_CouponId_fkey" FOREIGN KEY ("CouponId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_UserReceiptId_fkey" FOREIGN KEY ("UserReceiptId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
