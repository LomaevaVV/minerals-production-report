import { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductionData } from '../../types/production';

type ReportTableProps = {
  productionData: ProductionData[];
}

export default function ReportTable({productionData}: ReportTableProps): JSX.Element {
  const [reportData, setReportData] = useState<ProductionData[]>([]);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isRenderedRef.current) {
      setReportData(productionData);
      isRenderedRef.current = true;
    }
  }, [productionData, reportData]);

  return (
    <DataTable
      value={reportData}
      responsiveLayout="scroll"
      paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
      dataKey='date'
      emptyMessage='Данные для отчета не найдены'
      className='datatable-responsive'
      paginator
      rows={8}
    >
      <Column field="date" header="Дата" sortable></Column>
      <Column field="oilAmount" header="Добыча нефти, т/сут" sortable></Column>
      <Column field="waterAmount" header="Добыча жидкости, м3/сут" sortable></Column>
    </DataTable>
  );
}
