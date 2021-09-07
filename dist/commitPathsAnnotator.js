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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitPathsAnnotator = void 0;
var inversify_1 = require("inversify");
var filter_1 = require("./filter");
var TYPES_1 = require("./TYPES");
var CommitPathsAnnotator = /** @class */ (function () {
    function CommitPathsAnnotator() {
    }
    CommitPathsAnnotator.prototype.annotate = function (locality) {
        if ((0, filter_1.FILTER_CORRECTIVE_MESSAGE)(locality.commit)
            && (0, filter_1.FILTER_LESS_OR_EQUAL_TWO_FILES)(locality.commit, this.testFileMatcher)
            && (0, filter_1.FILTER_NO_MERGE_COMMIT)(locality.commit)
            && (0, filter_1.FILTER_NO_TEST_FILE)(locality, this.testFileMatcher)) {
            return 1;
        }
        return 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0UGF0aHNBbm5vdGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tbWl0UGF0aHNBbm5vdGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBRzdDLG1DQUtrQjtBQUNsQixpQ0FBdUU7QUFHdkU7SUFBQTtJQWVBLENBQUM7SUFYRyx1Q0FBUSxHQUFSLFVBQVMsUUFBb0I7UUFDekIsSUFBSSxJQUFBLGtDQUF5QixFQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7ZUFDdkMsSUFBQSx1Q0FBOEIsRUFBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7ZUFDckUsSUFBQSwrQkFBc0IsRUFBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2VBQ3ZDLElBQUEsNEJBQW1CLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUV4RCxPQUFPLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBWEQ7UUFEQyxJQUFBLGtCQUFNLEVBQUMsc0RBQThDLENBQUMsZUFBZSxDQUFDO2tDQUN0RCxNQUFNO2lFQUFDO0lBRmYsb0JBQW9CO1FBRGhDLElBQUEsc0JBQVUsR0FBRTtPQUNBLG9CQUFvQixDQWVoQztJQUFELDJCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksb0RBQW9CIn0=