"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParseIntBasedZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// 导出原先的验证器但做了重命名
var ZipCodeValidator_1 = require("./ZipCodeValidator");
exports.RegExpBasedZipCodeValidator = ZipCodeValidator_1.ZipCodeValidator;
