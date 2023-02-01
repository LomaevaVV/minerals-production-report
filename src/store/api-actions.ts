import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { ProductionData } from '../types/production';


export const fetchProductionDataAction = createAsyncThunk<ProductionData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBonus',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<ProductionData[]>(APIRoute.ProductionData);

      return data;
    } catch(e) {
      toast.error('Ошибка соединения с сервером', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });
