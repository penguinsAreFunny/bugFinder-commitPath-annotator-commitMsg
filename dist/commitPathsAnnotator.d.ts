import { Annotator } from "bugfinder-framework";
import { CommitPath } from "bugfinder-localityrecorder-commitpath";
export declare class CommitPathsAnnotator implements Annotator<CommitPath, number> {
    testFileMatcher: RegExp;
    annotate(locality: CommitPath): number;
}
