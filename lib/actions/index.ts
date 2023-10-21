"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scrapedAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        const scraperproduct = await scrapeAmazonProduct(productUrl);
    } catch(err: any) {
        throw new Error('Failed to create/update product: ' + err.message);
    }
}