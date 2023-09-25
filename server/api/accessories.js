const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

router.get('/', async (req, res, next)=>{
    try {
       const allAccessory = await prisma.accessory.findMany();
       res.send(allAccessory)
    } catch (error) {
        next(error)
    }
})

module.exports = router;