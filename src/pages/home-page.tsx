import { Badge } from "@/components/ui/badge";

export default function HomePage() {
    const cuisines: Array<string> = [
        "All",
        "Asian",
        "American",
        "Greek",
        "Italian",
        "Indian",
        "Japanese",
        "Mediterranean",
        "Mexican",
        "Pakistani",
    ];
    return (
        <>
            {cuisines.map((cuisine, idx) => (
                <Badge
                    key={`${cuisine}-${idx}`}
                    variant={"outline"}
                    className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
                >
                    {cuisine}
                </Badge>
            ))}
        </>
    );
}
