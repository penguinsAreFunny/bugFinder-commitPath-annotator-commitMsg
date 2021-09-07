import {inject, injectable} from "inversify";
import {Annotator, LocalityMap} from "bugfinder-framework";
import {CommitPath} from "bugfinder-localityrecorder-commitpath";
import {
    FILTER_CORRECTIVE_MESSAGE,
    FILTER_LESS_OR_EQUAL_TWO_FILES,
    FILTER_NO_MERGE_COMMIT,
    FILTER_NO_TEST_FILE
} from "./filter";
import {BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSG_TYPES} from "./TYPES";

@injectable()
export class CommitPathsAnnotator implements Annotator<CommitPath, number> {
    @inject(BUGFINDER_COMMITPATH_ANNOTATOR_COMMITMSG_TYPES.testFileMatcher)
    testFileMatcher: RegExp;

    annotate(localities: CommitPath[]): LocalityMap<CommitPath, number> {
        const map = new LocalityMap<CommitPath, number>();

        for(const locality of localities){
            const annotation = (FILTER_CORRECTIVE_MESSAGE(locality.commit)
                && FILTER_LESS_OR_EQUAL_TWO_FILES(locality.commit, this.testFileMatcher)
                && FILTER_NO_MERGE_COMMIT(locality.commit)
                && FILTER_NO_TEST_FILE(locality, this.testFileMatcher))? 1: 0
            map.set(locality, annotation)


            const corrective = FILTER_CORRECTIVE_MESSAGE(locality.commit)
            //console.log("CORRECTIVE")
            const lessOrEqual = FILTER_LESS_OR_EQUAL_TWO_FILES(locality.commit, this.testFileMatcher)
            //console.log("LESS_OR_EQUAL_TWO_FILES")
            const noMerge = FILTER_NO_MERGE_COMMIT(locality.commit)
            //console.log("NO_MERGE_COMMIT")
            const noTest = FILTER_NO_TEST_FILE(locality, this.testFileMatcher)
            //console.log("NO_TEST_FILE")
            console.log(corrective, "\t", lessOrEqual, "\t", noMerge, "\t", noTest, "\t")
        }

        return map;
    }

}