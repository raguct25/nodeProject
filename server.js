// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/test", async (request, reply) => {
  console.log("get reply called");
//   console.log("get request called", request);

  return { hello: "world", val: 5, vehicle: 25 };
});


fastify.get("/tests", async (request, reply) => {
    console.log("get tests called");
  //   console.log("get request called", request);
  
    return { hello: "world"};
  });
// Run the server!
const start = async () => {
  console.log("start function called");
  try {
    console.log("try function called");
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
