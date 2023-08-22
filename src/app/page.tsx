import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const Page = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-5xl mt-12">Liste d'outils de trolls utils </h1>
            <div className="container grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 mt-20 gap-8">
                {[1, 1, 1, 1, 1].map(() => <Card className="transition hover:scale-105 duration-200">
                    <CardHeader>
                        <CardTitle>Twitter ScreenShot</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Générer une capture d'écran de paiement Twitter(X)
                    </CardContent>
                </Card>)}
            </div>
        </div>
    );
};

export default Page;