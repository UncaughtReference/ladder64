import { Card, CardContent } from "@/components/ui/card"

import { type Achievement } from "@/types/Achievement"

import ListEntry from "@/components/ListEntry"

const listData: Achievement[] = [
    {
        hackName: "Treasure World: Dream Edition",
        courseName: "Final Tragedy",
        achievementName: "Climax of a Crappy Dream",
        tierAverage: 11.50,
        tierPlus: 0.00,
        tierMinus: 0.00,
        achievementType: "star",
        victors: [
            {
                username: "amsixx",
                avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/amsixx-profile_image-d510bc4d5d1c93de-70x70.png",
                role: "trusted",
            },
            {
                username: "oxzone",
                avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHnueHDX-RFrFl3ZPGcVRkLbQD3T8wKK6nB63cSPKkQ&s=10",
                role: "banned",
            },
        ]
    },
    {
        hackName: "level about me",
        courseName: "",
        achievementName: "Checkpointless",
        tierAverage: 15.67,
        tierPlus: 0.00,
        tierMinus: 0.00,
        achievementType: "star",
        victors: [
            {
                username: "lanayxy",
                avatarUrl: "https://cdn.discordapp.com/avatars/335492053872148481/266366b2a47cb8900f242dd0bd56e374.webp?size=64",
                role: "moderator",
            },
        ]
    },
    {
        hackName: "Frisply 64",
        courseName: "My",
        achievementName: "Dingaling",
        tierAverage: 26.00,
        tierPlus: 0.00,
        tierMinus: 0.00,
        achievementType: "star",
        victors: [
            {
                username: "UncaughtReference",
                avatarUrl: "https://cdn.discordapp.com/avatars/792035022575632385/a81ee59dbc678aacc8a8536e6d1674dd.webp?size=56",
                role: "administrator",
            },
        ]
    }
];

export default function List() {
    return (
        <div className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-1">
            <div className="rounded-xl bg-background">
                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            {listData.sort((a, b) => b.tierAverage - a.tierAverage).map((achievement, index) => (
                                <ListEntry key={index} achievement={achievement} index={index} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
