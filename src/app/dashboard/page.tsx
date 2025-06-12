import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export default function Dashboard() {
  return (
    <section className="p-10">
      <div className="container">
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="group-hover:text-white">Top Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, quod.
              </CardDescription>
              <CardAction>
                <div className="flex gap-4">
                  <Button>Edit</Button>
                  <Button variant={"destructive"}>Delete</Button>
                </div>
              </CardAction>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
