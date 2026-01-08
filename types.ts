import React from 'react';

export interface School {
  id: string;
  rank: number;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
  fees: string;
  board: string;
  ratio: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface StatItem {
  icon: React.ElementType;
  label: string;
  value: string;
}