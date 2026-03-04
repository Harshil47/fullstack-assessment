import { NextRequest, NextResponse } from 'next/server';
import { productService } from '@/lib/products';

export async function GET(
  request: NextRequest,
  { params }: { params: { sku: string } }
) {
  const { sku } = await params;
  const product = productService.getById(sku);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }
  if (!sku || typeof sku !== "string") {
    return NextResponse.json({ error: "Invalid SKU" }, { status: 400 });
  }
  

  return NextResponse.json(product);
}
