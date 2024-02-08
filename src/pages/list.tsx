import ProductCard from "@/components/ui/ProductCard";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import InvestmentCard from "@/components/ui/investmentCard";

const investments = [
  {
    id: "1",
    type: "Stocks",
    status: "active",
    date: "02/02/2023",
    name: "Retirement illusion",
    value: "25000",
  },
  {
    id: "2",
    type: "Crypto",
    status: "active",
    date: "03/02/2023",
    name: "Honeymoon deposit",
    value: "2500",
  },
  {
    id: "3",
    type: "Gold",
    status: "closed",
    date: "03/02/2023",
    name: "Child College fund",
    value: "500",
  },
  {
    id: "4",
    type: "Crypto",
    status: "active",
    date: "01/02/2013",
    name: "OG Diamon Hands",
    value: "61234",
  },
  {
    id: "5",
    type: "Property",
    status: "active",
    date: "03/02/2023",
    name: "Bubble of all bubbles",
    value: "300000",
  },
  {
    id: "6",
    type: "Cash",
    status: "active",
    date: "03/02/2023",
    name: "Printer goes Brrr",
    value: "40000",
  },
  {
    id: "6",
    type: "Stocks",
    status: "active",
    date: "03/02/2023",
    name: "mr. Powell gamble",
    value: "60000",
  },
];

const List = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {investments.map((item) => (
          <Card className="rounded-lg border-2 bg-red-500">
            <CardContent className="pt-4 bg-blue-300">
              <InvestmentCard
                isActive={item.status === "active"}
                status={<InvestmentCard.Status status={item.status} />}
                name={item.name}
                date={item.date}
                icon={<InvestmentCard.Icon type={item.type.toLowerCase()} />}
                value={item.value}
                onClick={() => {}}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default List;
