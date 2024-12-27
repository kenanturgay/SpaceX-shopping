import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 lg:px-20">
      <h1 className="text-2xl lg:text-2xl font-bold text-gray-800">
        Product Detail Page for Product ID: {id}
      </h1>
    </div>
  );
}