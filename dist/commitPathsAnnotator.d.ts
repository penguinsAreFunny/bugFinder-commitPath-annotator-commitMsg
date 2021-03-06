import { Annotator, LocalityMap } from "bugfinder-framework";
import { CommitPath } from "bugfinder-localityrecorder-commitpath";
export declare class CommitPathsAnnotator implements Annotator<CommitPath, number> {
    testFileMatcher: RegExp;
    annotate(localities: CommitPath[]): Promise<LocalityMap<CommitPath, number>>;
    annotateLoc(locality: CommitPath): number;
}
