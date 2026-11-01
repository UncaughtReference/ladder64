export function getTierBadgeColor(tier: number) {
    if (tier < 3.0) return "bg-blue-500";
    if (tier < 6.0) return "bg-green-500";
    if (tier < 9.0) return "bg-yellow-500";
    if (tier < 12.0) return "bg-orange-500";
    if (tier < 15.0) return "bg-red-500";
    return "bg-purple-500";
}
