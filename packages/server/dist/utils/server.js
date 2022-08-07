"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const productRoutes_1 = __importDefault(require("../routes/productRoutes"));
function createServer() {
    const serverRoot = path_1.default.resolve();
    const app = (0, express_1.default)();
    // middleware
    if (process.env.NODE_ENV === 'development') {
        app.use((0, morgan_1.default)('dev'));
    }
    app.use(express_1.default.json());
    // routes
    app.use('/api/products', productRoutes_1.default);
    if (process.env.NODE_ENV === 'production') {
        app.use(express_1.default.static(path_1.default.join(serverRoot, 'packages/client/build')));
        app.get('*', (req, res) => res.sendFile(path_1.default.resolve(serverRoot, 'packages', 'client', 'build', 'index.html')));
    }
    else {
        app.get('/', (req, res) => {
            res.json('API is running...');
        });
    }
    console.log('App Created!');
    return app;
}
exports.default = createServer;
