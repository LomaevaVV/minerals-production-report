import { ProductionData } from '../types/production';
import { State } from '../types/state';

export const getProductionData = (state: State): ProductionData | undefined => state.productionData;
export const getProductionFetchStatus = (state: State): string => state.productionFetchStatus;
