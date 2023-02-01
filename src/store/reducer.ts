import { createReducer } from '@reduxjs/toolkit';
import { FetchStatus } from '../const';
import { ProductionData } from '../types/production';
import { fetchProductionDataAction } from './api-actions';

type DataBonus = {
  productionData: ProductionData[];
  productionFetchStatus: string;
};

const initialState: DataBonus = {
  productionData: [],
  productionFetchStatus: FetchStatus.Idle,
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(fetchProductionDataAction.pending, (state) => {
        state.productionFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchProductionDataAction.fulfilled, (state, action) => {
        state.productionData = action.payload;
        state.productionFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchProductionDataAction.rejected, (state) => {
        state.productionFetchStatus = FetchStatus.Rejected;
      });
  }
);
