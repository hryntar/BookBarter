export type RegisterActions = 
  | { type: 'SET_LOGIN'; payload: string }
  | { type: 'SET_EMAIL'; payload: string } 
  | { type: 'SET_PWD'; payload: string }
  | { type: 'SET_MATCH_PWD'; payload: string }
  | { type: 'SET_ERR_MSG'; payload: string }
  | { type: 'SET_SUCCESS'; payload: boolean }
  | { type: 'SET_LOGIN_FOCUS'; payload: boolean }
  | { type: 'SET_EMAIL_FOCUS'; payload: boolean }
  | { type: 'SET_PWD_FOCUS'; payload: boolean }
  | { type: 'SET_MATCH_FOCUS'; payload: boolean };