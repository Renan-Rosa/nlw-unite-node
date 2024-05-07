import {
  convertToSlug
} from "./chunk-V6MIKS2A.mjs";
import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  z
} from "./chunk-AG67VYHJ.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/create-event.ts
async function createEvent(app) {
  app.withTypeProvider().post("/events", {
    schema: {
      body: z.object({
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable()
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid()
        })
      }
    }
  }, async (request, reply) => {
    const { title, details, maximumAttendees } = request.body;
    const slug = convertToSlug(title);
    const eventWithSameSlug = await prisma.event.findUnique({
      where: {
        slug
      }
    });
    if (eventWithSameSlug !== null) {
      throw new BadRequest("J\xE1 existe um evento com o mesmo slug");
    }
    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug
      }
    });
    console.log(request.body);
    return reply.status(201).send({ eventId: event.id });
  });
}

export {
  createEvent
};
