import React from 'react';

export interface User {
  username: string;
  balance: number;
  streak: number;
  referralCode: string;
}

export interface DayStatus {
  day: number;
  status: 'claimed' | 'available' | 'locked' | 'missed';
  reward: number;
}

export interface Task {
  id: string;
  title: string;
  reward: number;
  status: 'completed' | 'pending' | 'locked';
  icon: React.ReactNode;
  actionLabel: string;
}

export interface Meme {
  id: string;
  imageUrl: string;
  creator: string;
  reward: number;
  likes: number;
  status: 'approved' | 'rejected' | 'pending';
}

export enum Tab {
  HOME = 'HOME',
  MEME_FACTORY = 'MEME_FACTORY',
  LEADERBOARD = 'LEADERBOARD'
}