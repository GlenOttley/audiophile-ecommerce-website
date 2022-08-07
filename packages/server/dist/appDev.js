"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const server_1 = __importDefault(require("./utils/server"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const db_1 = __importDefault(require("./utils/db"));
// const serverRoot = path.resolve()
// dev
dotenv_1.default.config({ path: path_1.default.join(path_1.default.resolve(), '../../.env') });
// build
// dotenv.config({ path: path.resolve() + '/.env' })
console.log(path_1.default.resolve());
exports.app = (0, server_1.default)();
const PORT = process.env.PORT || 4000;
exports.app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    (0, db_1.default)();
});
