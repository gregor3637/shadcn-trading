import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import List from "./list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectNavMenu } from "@/services/store/reducers/navMenuSlice";

export default function Home() {
  const { isOpen, status } = useSelector(selectNavMenu);

  return (
    // <Container>
      <div className={cn(
        ` p-10 flex-1`,
        status && "duration-500",
        isOpen ? "ml-72" : "ml-[78px]"
      )}>
        <Card className="rounded-lg border-2">
          <CardHeader className="border-b-2 py-4">
            <CardTitle className="text-start text-3xl flex justify-between items-center">
              <span>Investments Management</span>
              <Button
                className={cn(
                  "group relative flex h-12 justify-start gap-3 max-w-max"
                )}
                variant={"default"}
              >
                <Plus /> Add New Investment
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <List />
          </CardContent>
        </Card>
      </div>
    // </Container>
  );
}
