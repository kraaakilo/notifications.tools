"use client"
import React, {useRef, useState} from 'react';
import {notFound} from "next/navigation";
import data from "@/data/data.json" ;
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import background from "@/images/background-2.jpg";
import stripe from "@/images/stripe.png";
import domtoimage from 'dom-to-image';
import {v5} from "uuid";

const Page = ({params}: { params: { tool: string } }) => {

    const [formData,setFormData] = useState({
        amount : 500,
        email : "kraaakilo@gmail.com",
    });
    const idList = data.map((tool) => tool.id);
    const canvaRef = useRef<HTMLDivElement>(null);
    const tool = data.find((tool) => tool.id === params.tool);
    if (!idList.includes(params.tool)) {
        return notFound();
    }

    const generateImage = () => {
        domtoimage.toPng(canvaRef.current!)
            .then(function (dataUrl) {
                const img = new Image();
                img.src = dataUrl;

                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = `${v5(dataUrl, v5.URL)}.png`;
                link.click();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }
    return (
        <div className="flex px-4 flex-col lg:flex-row space-y-5 pb-8 lg:pb-0">
            <div className="max-w-sm px-4 mx-auto lg:mx-0">
                <Card>
                    <CardHeader>
                        <CardTitle>{tool?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {tool?.description}
                        <div className="flex flex-col space-y-4 mt-5">
                            <div>
                                <Label>Réseau</Label>
                                <Input placeholder="Réseau s'affichant en haut"/>
                            </div>
                            <div>
                                <Label>Montant de la transaction</Label>
                                <Input
                                    value={formData.amount}
                                    onChange={
                                            event =>
                                                    setFormData(f =>
                                                        ({...formData,amount : parseFloat(event.target.value)})
                                                    )}
                                       placeholder="Montant en dollars USD"/>
                            </div>
                            <div>
                                <Label>Email de réception</Label>
                                <Input
                                    value={formData.email}
                                    onChange={
                                    event =>
                                        setFormData(f =>
                                            ({...formData,email : event.target.value})
                                        )}
                                       placeholder="Votre email"/>
                            </div>
                            <Button onClick={generateImage} variant={"default"}>Générer</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div ref={canvaRef}
                     className="w-80 h-[600px] flex justify-center items-center min-h-[4rem] !bg-center !bg-cover !bg-no-repeat"
                     style={{background: `url(${background.src})`}}>
                    <div className="bg-zinc-100 text-black w-full m-2 px-2 py-1 rounded-xl">
                        <div className="flex gap-2 mb-2 items-center">
                            <img className="rounded-xl" src={stripe.src} alt={"Stripe"} width={40} height={40}/>
                            <div>
                                <h4 className="font-bold flex justify-between items-center">
                                    <span className="text-sm">Stripe</span>
                                    <span className="font-light text-xs">2 min ago</span>
                                </h4>
                                <p className="text-foreground text-xs">Vous avez reçu un paiement de {formData.email} d'un
                                    montant de {formData.amount}$.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;