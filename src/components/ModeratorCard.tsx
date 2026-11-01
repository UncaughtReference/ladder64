import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import { type Moderator } from "@/types/Moderator"

export default function ModeratorCard({ moderator }: { moderator: Moderator }) {
    return (
        <Card className="md:flex-1 md:text-center md:min-w-0 [overflow-wrap:anywhere]">
            <CardContent>
                <div className="flex gap-2 items-center md:flex-col md:justify-center" >
                    <Avatar className="w-[80px] h-[80px]">
                        <AvatarImage src={moderator?.avatarUrl} />
                    </Avatar>
                    <div>
                        <p className="text-2xl"><strong>{moderator.username}</strong></p>
                        <p className="text-xl">{moderator.description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
