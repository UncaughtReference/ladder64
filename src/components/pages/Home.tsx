import { Card, CardHeader, CardContent } from "@/components/ui/card"

import SubmissionCard from "@/components/SubmissionCard"

import { type Submission } from "@/types/Submission"

const fakeSubmissionData: Submission[] = [
    {
        id: 1,
        username: "amsixx",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/amsixx-profile_image-d510bc4d5d1c93de-70x70.png",
        hackName: "Treasure World: Dream Edition",
        courseName: "Final Tragedy",
        achievementName: "Climax of a Crappy Dream",
        opinion: 12.5,
    },
    {
        id: 2,
        username: "lanayxy",
        avatarUrl: "https://cdn.discordapp.com/avatars/335492053872148481/266366b2a47cb8900f242dd0bd56e374.webp?size=64",
        hackName: "level about me",
        courseName: "",
        achievementName: "Checkpointless",
        opinion: 15.67,
    },
    {
        id: 3,
        username: "UncaughtReference",
        avatarUrl: "https://cdn.discordapp.com/avatars/792035022575632385/a81ee59dbc678aacc8a8536e6d1674dd.webp?size=56",
        hackName: "Frisply 64",
        courseName: "My",
        achievementName: "Dingaling",
        opinion: 26.0,
    }
]

export default function Home() {
    return (
        <div className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-1">
            <div className="rounded-xl bg-background">
                <Card>
                    <CardHeader className="text-xl">
                        Recent Submissions
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            {fakeSubmissionData?.map(submission => (
                                <SubmissionCard key={submission.id} submission={submission} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
