import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import { createEvent } from "./routes/create-event"
import { registerForEvent } from "./routes/register-for-event"
import { getEvent } from "./routes/get-event"
import { getAttendee } from "./routes/get-attendee-badge"
import { checkIn } from "./routes/check-in"
import { getEventAttendees } from "./routes/get-event-attendees"
import { errorHandler } from "./utils/error-handler"
import fastifyCors from "@fastify/cors"

const app = fastify()

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendee)
app.register(checkIn)
app.register(getEventAttendees)

app.register(fastifyCors, {
    origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log("HTTP server running")
})

