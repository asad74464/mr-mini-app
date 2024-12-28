import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ExchangeTab = () => (
  <div className="p-4">
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <h2 className="text-lg text-gray-500 font-semibold mb-4">Exchange</h2>
        <div className="space-y-4">
          {[
            { label: "Current Price", value: "$0.42", highlight: true },
            { label: "24h Volume", value: "$1,234,567" },
            { label: "Market Cap", value: "$420M" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-400">{item.label}</span>
              <span
                className={item.highlight ? "text-yellow-400" : "text-gray-600"}
              >
                {item.value}
              </span>
            </div>
          ))}
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
            Trade Now
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);
export default ExchangeTab;
