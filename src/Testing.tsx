import BattleCard from "./BattleCard"; // adjust path if needed

{
  [...Array(3)].map((_, i) => (
    <div
      key={i}
      className="flex flex-col gap-3 text-sm border-b border-gray-700 pb-4"
    >
      {/* Battle Card */}
      <BattleCard
        team1={{
          name: "Team Phoenix",
          logoUrl:
            "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677967_1280.jpg",
        }}
        team2={{
          name: "Team Dragon",
          logoUrl:
            "https://cdn.pixabay.com/photo/2024/04/05/18/22/ai-generated-8677964_1280.jpg",
        }}
        startTime={new Date(Date.now() + (i + 1) * 3600 * 1000).toISOString()} // different time for each card
      />

      {/* Optional Extra Info (below the card) */}
      <div className="flex gap-3">
        <div className="w-24 h-16 bg-gray-600 flex items-center justify-center text-white">
          3:50
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-white font-medium leading-tight">
            Here are many variat of passages of Lorem
          </p>
          <div className="text-xs text-gray-400">
            <p>
              Education <span className="text-green-400">✔</span>
            </p>
            <p>1.8M views • 11 Months ago</p>
          </div>
        </div>
      </div>
    </div>
  ));
}
