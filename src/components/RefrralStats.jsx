const ReferralStats = () => (
  <div className="mt-4">
    <h3 className="text-sm font-semibold text-gray-400 mb-2">Referral Stats</h3>
    {[
      { label: "Total Referrals", value: "12" },
      { label: "Earned Rewards", value: "1,200 GAME", highlight: true },
    ].map((stat, index) => (
      <div key={index} className="flex justify-between text-sm mt-2">
        <span className="text-gray-400">{stat.label}</span>
        <span className={stat.highlight ? "text-yellow-400" : "text-gray-500"}>
          {stat.value}
        </span>
      </div>
    ))}
  </div>
);
export default ReferralStats;
