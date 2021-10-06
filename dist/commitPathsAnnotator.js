"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitPathsAnnotator = void 0;
var inversify_1 = require("inversify");
var bugfinder_framework_1 = require("bugfinder-framework");
var filter_1 = require("./filter");
var TYPES_1 = require("./TYPES");
var CommitPathsAnnotator = /** @class */ (function () {
    function CommitPathsAnnotator() {
    }
    CommitPathsAnnotator.prototype.annotate = function (localities) {
        var e_1, _a;
        var map = new bugfinder_framework_1.LocalityMap();
        try {
            for (var localities_1 = __values(localities), localities_1_1 = localities_1.next(); !localities_1_1.done; localities_1_1 = localities_1.next()) {
                var locality = localities_1_1.value;
                var annotation = this.annotateLoc(locality);
                map.set(locality, annotation);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (localities_1_1 && !localities_1_1.done && (_a = localities_1.return)) _a.call(localities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return map;
    };
    CommitPathsAnnotator.prototype.annotateLoc = function (locality) {
        return ((0, filter_1.FILTER_CORRECTIVE_MESSAGE)(locality.commit)
            && (0, filter_1.FILTER_LESS_OR_EQUAL_TWO_FILES)(locality.commit, this.testFileMatcher)
            && (0, filter_1.FILTER_NO_MERGE_COMMIT)(locality.commit)
            && (0, filter_1.FILTER_NO_TEST_FILE)(locality, this.testFileMatcher)) ? 1 : 0;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSG_TYPES.testFileMatcher),
        __metadata("design:type", RegExp)
    ], CommitPathsAnnotator.prototype, "testFileMatcher", void 0);
    CommitPathsAnnotator = __decorate([
        (0, inversify_1.injectable)()
    ], CommitPathsAnnotator);
    return CommitPathsAnnotator;
}());
exports.CommitPathsAnnotator = CommitPathsAnnotator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0UGF0aHNBbm5vdGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tbWl0UGF0aHNBbm5vdGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkRBQTJEO0FBRTNELG1DQUtrQjtBQUNsQixpQ0FBdUU7QUFHdkU7SUFBQTtJQXFCQSxDQUFDO0lBakJHLHVDQUFRLEdBQVIsVUFBUyxVQUF3Qjs7UUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxpQ0FBVyxFQUFzQixDQUFDOztZQUVsRCxLQUFzQixJQUFBLGVBQUEsU0FBQSxVQUFVLENBQUEsc0NBQUEsOERBQUM7Z0JBQTdCLElBQU0sUUFBUSx1QkFBQTtnQkFDZCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQTthQUNoQzs7Ozs7Ozs7O1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sMENBQVcsR0FBbEIsVUFBbUIsUUFBb0I7UUFDbkMsT0FBTyxDQUFDLElBQUEsa0NBQXlCLEVBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztlQUMzQyxJQUFBLHVDQUE4QixFQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztlQUNyRSxJQUFBLCtCQUFzQixFQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7ZUFDdkMsSUFBQSw0QkFBbUIsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFsQkQ7UUFEQyxJQUFBLGtCQUFNLEVBQUMsc0RBQThDLENBQUMsZUFBZSxDQUFDO2tDQUN0RCxNQUFNO2lFQUFDO0lBRmYsb0JBQW9CO1FBRGhDLElBQUEsc0JBQVUsR0FBRTtPQUNBLG9CQUFvQixDQXFCaEM7SUFBRCwyQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLG9EQUFvQiJ9