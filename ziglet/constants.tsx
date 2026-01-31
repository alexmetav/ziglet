import React from 'react';
import { DayStatus, Task, Meme } from './types';
import { Sparkles, Twitter, MessageCircle, Share2, UserPlus, Zap, Lock } from 'lucide-react';

export const INITIAL_USER = {
  username: 'Anon_Degen',
  balance: 420.69,
  streak: 12,
  referralCode: 'ZG-8X29'
};

export const WEEKLY_DRIP: DayStatus[] = [
  { day: 1, status: 'claimed', reward: 50 },
  { day: 2, status: 'claimed', reward: 55 },
  { day: 3, status: 'claimed', reward: 60 },
  { day: 4, status: 'available', reward: 100 },
  { day: 5, status: 'locked', reward: 70 },
  { day: 6, status: 'locked', reward: 75 },
  { day: 7, status: 'locked', reward: 250 },
];

export const DAILY_TASKS: Task[] = [
  {
    id: '1',
    title: 'Claim Daily Drip',
    reward: 100,
    status: 'pending',
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    actionLabel: 'Claim or Cry'
  },
  {
    id: '2',
    title: 'Touch Grass (Connect X)',
    reward: 50,
    status: 'completed',
    icon: <Twitter className="w-5 h-5 text-blue-400" />,
    actionLabel: 'Connected'
  },
  {
    id: '3',
    title: 'Submit a Fire Meme',
    reward: 200,
    status: 'pending',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    actionLabel: 'Create'
  },
  {
    id: '4',
    title: 'Recruit a Degen',
    reward: 500,
    status: 'locked',
    icon: <UserPlus className="w-5 h-5 text-green-400" />,
    actionLabel: 'Invite'
  }
];

export const RECENT_MEMES: Meme[] = [
  {
    id: 'm1',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    creator: 'PepeLord',
    reward: 150,
    likes: 42,
    status: 'approved'
  },
  {
    id: 'm2',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    creator: 'DogeWhisperer',
    reward: 120,
    likes: 89,
    status: 'approved'
  },
  {
    id: 'm3',
    imageUrl: 'https://picsum.photos/400/500?random=3',
    creator: 'WagmiWarrior',
    reward: 0,
    likes: 0,
    status: 'rejected'
  }
];
