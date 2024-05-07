import {
  errorHandler
} from "./chunk-BOVOMN3R.mjs";
import {
  checkIn
} from "./chunk-W4NTWOSE.mjs";
import {
  createEvent
} from "./chunk-J4CC6ZNS.mjs";
import "./chunk-V6MIKS2A.mjs";
import {
  getAttendee
} from "./chunk-X6VZMFSG.mjs";
import {
  getEventAttendees
} from "./chunk-Y7QWPX4Z.mjs";
import {
  getEvent
} from "./chunk-WLMLLBXA.mjs";
import {
  registerForEvent
} from "./chunk-LQHK4CCQ.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-AG67VYHJ.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendee);
app.register(checkIn);
app.register(getEventAttendees);
app.register(fastifyCors, {
  origin: "*"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
