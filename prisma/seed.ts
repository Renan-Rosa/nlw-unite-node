import { prisma } from "../src/lib/prisma"

async function seed(){
    await prisma.event.create({
        data: {
            id: '1e319caf-afc0-45e8-a650-e3f1d76eceB8',
            title: 'Evento Teste',
            slug: 'evento-teste',
            details: 'Um evento teste',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
})