import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { ProductionData } from '../types/production';


export const fetchProductionDataAction = createAsyncThunk<ProductionData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProductionData',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<ProductionData[]>(APIRoute.ProductionData);
    return data;
  }
);
