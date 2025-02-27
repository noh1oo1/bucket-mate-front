export interface BucketParticipant {
  id: number;
  bucketId: number;
  participantId: number;
}

export interface BucketParticipantTemp {
  userId: number;
  nickname: string;
  profile: string;
}

export type Category =
  | '운동'
  | '여행'
  | '학습'
  | '취미'
  | '음식'
  | '문화'
  | '봉사'
  | '기타';

export interface Bucket {
  bucketId: number;
  ownerId: number;
  categories: Category[];
  title: string;
  description: string;
  participant: BucketParticipant[];
  maxCapacity: number;
  progressStatus: 0 | 1 | 2; //0: 모집중, 1: 진행중, 2: 완료
  startDate: string;
  endDate: string;
  createdAt: string;
}

export interface User {
  userId: number;
  nickname: string;
  profile: string;
  email: string;
  bookmarkList: number[];
  createdAt: string;
}

export interface ProfileListProps {
  srcList: string[];
}
