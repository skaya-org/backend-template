import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Swagger definition
 */
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'AI Chat API',
    version: '1.0.0',
    description: 'API for getting sample AI responses',
    contact: {
      name: 'API Support',
      url: 'http://example.com',
      email: 'support@example.com',
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
    {
      url: 'https://api.example.com',
      description: 'Production server',
    },
  ],

};

/**
 * Options for the swagger docs
 */
const options: swaggerJsdoc.Options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.ts'],
};

/**
 * Initialize swagger-jsdoc
 */
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;