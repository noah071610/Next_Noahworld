"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashtag = exports.Image = exports.Quiz = exports.SubComment = exports.Comment = exports.Post = exports.User = void 0;
const user_1 = __importStar(require("./user"));
exports.User = user_1.default;
const post_1 = __importStar(require("./post"));
exports.Post = post_1.default;
const comment_1 = __importStar(require("./comment"));
exports.Comment = comment_1.default;
const subcomment_1 = __importStar(require("./subcomment"));
exports.SubComment = subcomment_1.default;
const quiz_1 = __importStar(require("./quiz"));
exports.Quiz = quiz_1.default;
const image_1 = __importStar(require("./image"));
exports.Image = image_1.default;
const hashtag_1 = __importStar(require("./hashtag"));
exports.Hashtag = hashtag_1.default;
__exportStar(require("./sequelize"), exports);
const db = {
    User: user_1.default,
    Post: post_1.default,
    Comment: comment_1.default,
    SubComment: subcomment_1.default,
    Quiz: quiz_1.default,
    Image: image_1.default,
    Hashtag: hashtag_1.default,
};
user_1.associate(db);
comment_1.associate(db);
hashtag_1.associate(db);
image_1.associate(db);
post_1.associate(db);
quiz_1.associate(db);
subcomment_1.associate(db);
