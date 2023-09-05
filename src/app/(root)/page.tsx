import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import data from "@/data/data.json" ;
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-5xl">Liste d'outils</h1>
            <div className="container grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 mt-20 gap-8">
                {data.map((tool) =>
                    <Link href={tool.link}>
                        <Card className="transition hover:scale-105 duration-200">
                            <CardHeader>
                                <CardTitle>{tool.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {tool.description}
                            </CardContent>
                        </Card>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Page;