import { type User } from "@/types/User"

export type Achievement = {
    hackName: string,
    courseName: string,
    achievementName: string,
    tierAverage: number,
    tierPlus: number,
    tierMinus: number,
    achievementType: string,
    victors: User[],
}
