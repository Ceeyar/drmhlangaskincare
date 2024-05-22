
export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type IconName = 'AssuredWorkloadIcon' | 'FoundationIcon' | 'SchoolIcon';

export interface MediaCardProps {
    logo: string,
    name: string,
    treatment: string
}