'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../_components/TemplateListSection";

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

function HistoryClient() {
    const [historyList, setHistoryList] = useState<HISTORY[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchHistory() {
            try {
                const response = await fetch('/api/history');
                if (!response.ok) {
                    throw new Error('Failed to fetch history');
                }
                const data = await response.json();
                setHistoryList(data);
            } catch (err) {
                setError('Failed to load history. Please try again later.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchHistory();
    }, []);

    const GetTemplateName = (slug: string) => {
        const template = Templates?.find((item) => item.slug === slug);
        return template;
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return(
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl mb-4'>History</h2>
            <p className='text-gray-500 mb-6'>Search your previously generated content</p>
            <div className='grid grid-cols-7 font-bold bg-gray-100 p-3 rounded-t-lg'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>AI RESP</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>
            {historyList.map((item: HISTORY, index: number) => (
                <div key={index} className='grid grid-cols-7 py-4 px-3 border-b'>
                    <div className='col-span-2 flex items-center gap-2'>
                        <Image src={GetTemplateName(item?.templateSlug)?.icon || '/default-icon.png'} width={25} height={25} alt={GetTemplateName(item.templateSlug)?.name || "Template Icon"} />
                        <span>{GetTemplateName(item.templateSlug)?.name || item.templateSlug}</span>
                    </div>
                    <p className='col-span-2 line-clamp-2'>{item?.aiResponse}</p>
                    <p>{item?.createdAt}</p>
                    <p>{item?.aiResponse.split(' ').length}</p>
                    <Button 
                        variant='ghost' 
                        className='text-blue-600 hover:text-blue-800'
                        onClick={() => navigator.clipboard.writeText(item.aiResponse)}
                    >
                        Copy
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default HistoryClient;