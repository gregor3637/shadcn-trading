import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import List from "./list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    // <Container>
      <div className="bg-red-400 p-10">
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
