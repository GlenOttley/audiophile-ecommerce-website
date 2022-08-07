"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const db_1 = __importDefault(require("./utils/db"));
dotenv_1.default.config({ path: path_1.default.resolve() + '/.env' });
const app = (0, express_1.default)();
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
(0, db_1.default)();
const __dirnameAlias = path_1.default.resolve();
// middleware
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirnameAlias, 'packages/client/build')));
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirnameAlias, 'packages', 'client', 'build', 'index.html')));
}
else {
    app.get('/', (req, res) => {
        res.json('API is running...');
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
