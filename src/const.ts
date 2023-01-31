export const enum FetchStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Rejected = 'REJECTED',
}

export const APIRoute = {
  ProductionData: 'http://84.201.188.117:5027/api/production'
} as const;
