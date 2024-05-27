'use strict';
import dotenv from 'dotenv';
dotenv.config();

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const setupSwagger = (app, serverPort) => {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'social-login-project API',
                version: '1.0.0',
                description: '프로젝트 api 모음',
            },
            servers: [
                {
                    url: `http://127.0.0.1:${serverPort}/socialLoginProject/api/v1`,
                },
            ],
        },
        apis: ['./lib/*.js'],
    };

    const specs = swaggerJSDoc(options)
    app.use('/socialLoginProject/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export { setupSwagger };
