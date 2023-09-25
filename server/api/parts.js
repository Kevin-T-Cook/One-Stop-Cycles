const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

router.get('/', async (req, res, next)=>{
    try {
      const allParts = await prisma.part.findMany();
      res.send(allParts)
    } catch (error) {
        next(error)
    }
})
module.exports = router;