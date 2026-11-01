import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarGroup, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { type Achievement } from "@/types/Achievement"

import { getTierBadgeColor } from "@/lib/getTierBadgeColor"

export default function ListEntry({ achievement, index }: { achievement: Achievement; index: number }) {
    return (
        <Card className="h-60 md:h-30 shrink-0 flex flex-row items-center">
            <CardContent className="w-full">
                <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
                    <div className="flex min-w-0 flex-1 gap-2 items-center flex-col text-center md:flex-row md:text-left">
                        <p className="text-5xl w-16 shrink-0">#{index + 1}</p>
                        <div className="flex-1 items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-bold
      bg-gradient-to-r from-blue-500 to-green-600
      bg-clip-text text-transparent"> {achievement.achievementName}</span>
                                <Badge className={`${getTierBadgeColor(achievement.tierAverage)} text-xl h-full`}>{achievement.tierAverage.toFixed(2)}</Badge>
                            </div>
                            <p className="text-xl font-bold
      bg-gradient-to-r from-indigo-500 to-pink-600
      bg-clip-text text-transparent">{achievement.hackName}</p>
                            <p>{achievement.courseName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Victors:</p>
                        <AvatarGroup className="shrink-0">
                            {achievement?.victors?.map((victor, index) => (
                                <Avatar key={index}>
                                    <AvatarImage src={victor.avatarUrl} alt={victor.username} />
                                    <AvatarFallback>
                                        <Avatar>
                                            <AvatarImage src={`${import.meta.env.BASE_URL}genericUser.png`} />
                                        </Avatar>
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                        </AvatarGroup>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
