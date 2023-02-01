import { useEffect } from 'react';
import { FetchStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { fetchProductionDataAction } from '../../store/api-actions';
import { getProductionData, getProductionFetchStatus } from '../../store/selectors';
import ReportTable from '../reportTable/reportTable';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const productionData = useAppSelector(getProductionData);
  const productionFetchStatus = useAppSelector(getProductionFetchStatus);

  useEffect(() => {
    dispatch(fetchProductionDataAction());
  }, [dispatch]);

  return (
    <main className='page-main'>
      <div className='page-main_wrapper'>
        <h1 className='page-main_title'>
          Динамика добычи нефти и воды на месторождении «Северное» за период 01 – 31 января 2023 г.
        </h1>
        {productionFetchStatus === FetchStatus.Success && <ReportTable productionData={productionData}/>}
        {productionFetchStatus === FetchStatus.Rejected && <p>Не удалось загрузить данные для отчета</p>}
      </div>
    </main>
  );
}

export default App;
