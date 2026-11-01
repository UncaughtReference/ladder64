import { Card, CardHeader, CardContent } from "@/components/ui/card"

import SubmissionCard from "@/components/SubmissionCard"
import ModeratorCard from "@/components/ModeratorCard"

import { type Submission } from "@/types/Submission"
import { type Moderator } from "@/types/Moderator"
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
];

const moderatorData: Moderator[] = [
    {
        id: 1,
        username: "UncaughtReference",
        avatarUrl: "https://cdn.discordapp.com/avatars/792035022575632385/a81ee59dbc678aacc8a8536e6d1674dd.webp?size=56",
        description: "larper",
    },
    {
        id: 2,
        username: "lanayxy",
        avatarUrl: "https://cdn.discordapp.com/avatars/335492053872148481/266366b2a47cb8900f242dd0bd56e374.webp?size=64",
        description: "loving autistic girl",
    },
    {
        id: 3,
        username: "AndrewSM64",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/63db31df-7f8c-43cd-ba25-1460421b2161-profile_image-150x150.png",
        description: "diddy larp",
    },
    {
        id: 4,
        username: "MorningStorm64",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/2f1bd71c-388c-4b54-9050-d06ed2e45dd0-profile_image-70x70.png",
        description: "opposite of larp, actually cares about the game",
    }
];

export default function Home({ pulsingCard }: { pulsingCard: string | null }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-1">
                <div className="rounded-xl bg-background">
                    <Card id="recentSubmissions" className={pulsingCard === "recentSubmissions" ? "scale-pulse" : ""}>
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
            <div className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-1">
                <div className="rounded-xl bg-background">
                    <Card id="moderators" className={pulsingCard === "moderators" ? "scale-pulse" : ""}>
                        <CardHeader className="text-xl">
                            Moderators
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2 md:flex-row">
                                {moderatorData?.map(moderator => (
                                    <ModeratorCard key={moderator.id} moderator={moderator} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
