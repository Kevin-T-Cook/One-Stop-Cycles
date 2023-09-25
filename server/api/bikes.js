const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

router.get('/', async (req, res, next)=>{
    try {
        const allBikes = await prisma.bikes.findMany();
        res.send(allBikes)
    } catch (error) {
        next(error)
    }
})

module.exports = router;