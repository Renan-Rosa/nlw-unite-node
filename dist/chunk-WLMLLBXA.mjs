import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  z
} from "./chunk-AG67VYHJ.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/get-event.ts
async function getEvent(app) {
  app.withTypeProvider().get("/events/:eventId", {
    schema: {
      params: z.object({
        eventId: z.string().uuid()
      }),
      response: {
        200: {
          event: z.object({
            id: z.string().uuid(),
            title: z.string(),
            details: z.string().nullable(),
            maximumAttendees: z.number().int().nullable(),
            attendeesAmount: z.number().int()
          })
        }
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params;
    const event = await prisma.event.findUnique({
      select: {
        id: true,
        title: true,
        details: true,
        maximumAttendees: true,
        _count: {
          select: {
            attendees: true
          }
        }
      },
      where: {
        id: eventId
      }
    });
    if (event === null) {
      throw new BadRequest("Event not found");
    }
    return reply.send({ event: {
      id: event.id,
      title: event.title,
      details: event.details,
      maximumAttendees: event.maximumAttendees,
      attendeesAmount: event._count.attendees
    } });
  });
}

export {
  getEvent
};
