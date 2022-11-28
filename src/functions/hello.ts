import { APIGatewayProxyHandler } from "./../../node_modules/@types/aws-lambda/trigger/api-gateway-proxy.d";

export const handler: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello World Ignite Serverless",
    }),
  };
};
