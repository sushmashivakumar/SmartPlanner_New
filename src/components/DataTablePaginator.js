
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { CustomerService } from '../service/CustomerService';


const DataTablePaginator = () => {

    const [customers3, setCustomers3] = useState([]);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const customerService = new CustomerService();


    const onCustomPage2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    }

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }


    useEffect(() => {
        customerService.getCustomersLarge().then(data => setCustomers1(data));
        customerService.getCustomersLarge().then(data => setCustomers2(data));
        customerService.getCustomersLarge().then(data => setCustomers3(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };

    return (
        <div>
            <div className="card">
                <DataTable value={customers3} paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2}
                    paginatorClassName="justify-content-end" className="mt-6" responsiveLayout="scroll">
                </DataTable>
            </div>
        </div>
    );
};

export default DataTablePaginator;