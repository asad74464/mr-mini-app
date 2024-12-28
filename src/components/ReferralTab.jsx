import { Copy, Send, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ReferralStats from "./RefrralStats";

const ReferralTab = ({ referralCode }) => (
  <div className="p-4">
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-400 mb-3">
          Referral Program
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
            <span className="text-sm text-gray-300">{referralCode}</span>
            <Button
              variant="ghost"
              className="text-yellow-400"
              onClick={() => navigator.clipboard.writeText(referralCode)}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Send, label: "Telegram" },
              { icon: Share2, label: "Share" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center justify-center"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
          <ReferralStats />
        </div>
      </CardContent>
    </Card>
  </div>
);
export default ReferralTab;
