export const enum FetchStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Rejected = 'REJECTED',
}

export const APIRoute = {
  ProductionData: '/production'
} as const;
