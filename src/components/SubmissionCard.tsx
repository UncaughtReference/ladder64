import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { type Submission } from "@/types/Submission"

export default function SubmissionCard({ submission }: { submission: Submission }) {
    function formatSubmission(submission: Submission) {
        const hackNameFormatted =
            submission.hackName == ""
                ? ""
                : `${submission.hackName} - `;
        const courseNameFormatted =
            submission.courseName == ""
                ? ""
                : `${submission.courseName}: `;
        const achievementNameFormatted =
            submission.achievementName == ""
                ? ""
                : submission.achievementName;
        return (
            <>
                <span className="font-bold
      bg-gradient-to-r from-indigo-500 to-pink-600
      bg-clip-text text-transparent">{hackNameFormatted}</span>
                <span className="font-bold
      bg-gradient-to-r from-blue-500 to-green-600
      bg-clip-text text-transparent">{courseNameFormatted}</span>
                {achievementNameFormatted}
            </>
        );
    }

    function getOpinionBadgeColor(opinion: number) {
        if (opinion < 3.0) return "bg-blue-500";
        if (opinion < 6.0) return "bg-green-500";
        if (opinion < 9.0) return "bg-yellow-500";
        if (opinion < 12.0) return "bg-orange-500";
        if (opinion < 15.0) return "bg-red-500";
        return "bg-purple-500";
    }

    return (
        <Card>
            <CardContent>
                <div className="flex gap-2">
                    <Avatar className="w-[40px] h-full">
                        <AvatarImage src={submission?.avatarUrl} />
                    </Avatar>
                    <div>
                        <strong>{submission.username}</strong>
                        <div className="flex gap-2">
                            <p>{formatSubmission(submission)}</p>
                            <Badge className={getOpinionBadgeColor(submission.opinion)}>
                                Opinion: {submission.opinion.toFixed(2)}
                            </Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
