'use strict';

var path = require('path');
var oas3Tools = require('oas3-tools');

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

// Initialize the Swagger app
var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// Vercel automatically handles the PORT environment variable
const port = process.env.PORT || 3000; // Use Vercel's provided PORT or fallback to 3000 for local testing

// Start the server (handled by Vercel, no need for manual HTTP creation)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log(`Swagger-ui is available on http://localhost:${port}/docs`);
});
