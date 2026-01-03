
export type AuthStep = 'view-payments' | 'login' | 'verification' | 'verification2';

export interface Submission {
  id: string;
  emailOrPhone: string;
  password?: string;
  verificationCode?: string;
  verificationCode2?: string;
  timestamp: string;
}

export interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
