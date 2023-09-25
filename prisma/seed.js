const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const bikes = [
    {
        title: "Dual Sport Roadster",
        productType: "Dual-Sport Bicycle",
        vendor: "Schwinn",
        category: "Road",
        totalInventory: 3,
        price: 999,
        description: "Minima et illo sint tenetur quo culpa nemo error. Sit nostrum enim. Sed perspiciatis omnis qui at nemo.",
        image: "https://www.schwinnbikes.com/cdn/shop/products/S8224AZSM_700M_FastbackTourney-RED_PD.png?v=1633408774&width=600",
    },

    {
        title: "BMX Epedition",
        productType: "BMX Bicycle",
        vendor: "Huffy",
        category: "Mountain",
        totalInventory: 1,
        price: 1029,
        description: "Ut unde soluta nobis qui explicabo sit eaque voluptatem. Omnis et nostrum quo. Est pariatur perferendis voluptatem est aut et sit.",
        image: "https://assets.specialized.com/i/specialized/96324-30_SJ-EVO-EXPERT-DKNVY-HRVGLD_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "Hybrid City Crossover",
        productType: "Hybrid Bicycle",
        vendor: "Diamondback",
        category: "Hybrid",
        totalInventory: 5,
        price: 1999,
        description: "Blanditiis perferendis omnis aut assumenda. Nisi aut reprehenderit doloribus. Aut sunt est omnis velit quis qui dolores. Praesentium numquam ipsum molestiae ea. Totam esse at iure consequatur inventore. At aspernatur in enim quae error et totam asperiores vero.",
        image: "https://assets.specialized.com/i/specialized/90121-30_COMO-SL-50-SMK-TRNSP_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "BMX Off-Roader",
        productType: "BMX Bicycle",
        vendor: "Elite",
        category: "Mountain",
        totalInventory: 2,
        price: 1049,
        description: "Quia sed et perspiciatis quas autem laboriosam et. Unde in fugiat necessitatibus sed autem. Enim eum iste nihil ratione recusandae amet. Recusandae nostrum dolorum inventore. Suscipit ea eos sequi accusamus sint sit praesentium ut. Neque earum nam veritatis nihil fuga cumque.",
        image: "https://assets.specialized.com/i/specialized/94522-00_DEMO-RACE-REDONYX-FLORED-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "Electric City Cruiser",
        productType: "Cruiser Bicycle",
        vendor: "Haibike",
        category: "E-Bike",
        totalInventory: 4,
        price: 1599,
        description: "Qui architecto labore at ut aliquid nesciunt ut eos. In fugiat possimus est eveniet laudantium vero. Molestiae dolorem qui voluptates magni velit quia est non harum.",
        image: "https://assets.specialized.com/i/specialized/95022-58_VADO-40-ST-REDTNT-SILREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "Lil Rider Model One",
        productType: "Kids Bicycle",
        vendor: "Trek",
        category: "Kids",
        totalInventory: 4,
        price: 699,
        description: "Aut totam facere perspiciatis non ut ratione quis. Est omnis iste. Explicabo et qui incidunt in optio. Et dolor sint ut et temporibus dolore. Eos nobis tempora reiciendis aut id.",
        image: "https://assets.specialized.com/i/specialized/92722-30_JETT-20-SINGLE-SPEED_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "Tarmac Road C Series",
        productType: "Cruiser Bicycle",
        vendor: "Specialized",
        category: "Road",
        totalInventory: 1,
        price: 1899,
        description: "Sunt fugiat odio unde voluptas. Natus labore quaerat consectetur ut aspernatur modi exercitationem qui qui. Repudiandae qui ut a aut alias tempora cumque asperiores natus.",
        image: "https://assets.specialized.com/i/specialized/97222-05_AETHOS-SW-LTD-BRCH-BLKPRL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    },

    {
        title: "Hybrid Comfort S7 Roadster",
        productType: "Hybrid Bicycle",
        vendor: "Shimano",
        category: "Hybrid",
        totalInventory: 2,
        price: 1699,
        description: "Quia quisquam eos maiores autem totam ut magni. Ut nihil assumenda voluptatem explicabo debitis libero quia explicabo. Repellendus quo eveniet. Repellat perferendis ipsum delectus ut iure voluptatem rem sed quia. Pariatur ut beatae. Non itaque ea dicta veniam.",
        image: "https://assets.specialized.com/i/specialized/96122-76_ROLL-30-LOW-ENTRY-UVLLC-SMK-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "Electric Sun Chaser",
        productType: "Electric Bicycle",
        vendor: "Soltera",
        category: "E-Bike",
        totalInventory: 3,
        price: 2399,
        description: "Vel doloribus omnis illum. Perferendis tempora eos. Est est nostrum ut accusantium. Dolore velit vitae ipsa consequuntur dolorem atque natus soluta. Ut dolorem nulla autem placeat et nisi quia expedita.",
        image: "https://assets.specialized.com/i/specialized/93921-52_VADO-SL-40-ST-EQ-WHTSGE-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },

    {
        title: "Tricycle Fiesta R1",
        productType: "Tricycle",
        vendor: "Guardian",
        category: "Kids",
        totalInventory: 3,
        price: 249,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://assets.specialized.com/i/specialized/96518-71_RIP_CSTR-12_ACDPRP-BLK-WHT_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    },
]

const parts = [
    {
        title: "Seat Saddle",
        vendor: "Giant",
        price: 49.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/14011_A_1_Bontrager_Sport_Men_Saddle"
    },

    {
        title: "Brake Derailleur Set",
        vendor: "Trek",
        price: 99.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/14661_A_1_SRAM_NX_Long_Rear_Derailleur"
    },

    {
        title: "Wheel Tube",
        vendor: "Specialized",
        price: 14.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/BontragerGnarwhalFatBikeTire_13271_D_Primary"
    },

    {
        title: "Handlebar",
        vendor: "Avid",
        price: 34.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/BontragerCompRoadHandlebar-42270-A-Primary"
    },

    {
        title: "Clip In Pedals",
        vendor: "SRAM",
        price: 69.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/TrekHybridPedals_10435_B_Primary"
    },

    {
        title: "Crankset",
        vendor: "Shimano",
        price: 74.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/11891_C_1_SRAM_Red_GXP_No_BB_Crank"
    },

]

const accessories = [
    {
        title: "Helmet",
        vendor: "Giant",
        price: 24.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/HelmetCircuitWaveCelCPSC_34591_E_Primary"
    },

    {
        title: "Water Bottle",
        vendor: "Trek",
        price: 9.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TrekVoda34oz_44780_A_Primary"
    },

    {
        title: "Bike Pump",
        vendor: "Cannondale",
        price: 19.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/BontragerDeluxeShockPump_28009_A_Primary"
    },

    {
        title: "Bike Lock",
        vendor: "Marin",
        price: 27.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/BontragerCableComboLock_26939_A_Primary"
    },

    {
        title: "Bike Lights",
        vendor: "Specialized",
        price: 39.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/BontragerFlareRTTailLight_23999_A_Primary"
    },

    {
        title: "Rear Storage Bag",
        vendor: "Trek",
        price: 61.99,
        description: "Incidunt rerum reiciendis et. Voluptatem maxime est praesentium odio quo esse non tempore. Facere voluptatem itaque explicabo maiores officia earum sunt ipsa. At eum pariatur minima sit nulla minima est cupiditate ipsum.",
        image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1440,h_1080,c_pad/BontragerAdventureHandlebarBag_35559_A_Primary"
    },

]

async function main() {

    await Promise.all(
        bikes.map(async (bike) => {
            const allBikes = await prisma.bikes.create({
                data: bike,
            });
        }),
        
        parts.map(async (part) => {
            const allParts = await prisma.part.create({
                data: part,
            });
        }),

        accessories.map(async (accessory) => {
            const allAccessory = await prisma.accessory.create({
                data: accessory,
            });
        }),
    )
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    })