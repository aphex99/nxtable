import StoreProvider from '@/app/StoreProvider';
import BasicTable from '@/app/ui/data-table/data-table';

export default async function Home() {
    return (
        <StoreProvider>
            <div className={'flex justify-center'}>
                <h1>{'29.07.25'}</h1>
                <BasicTable />
            </div>
        </StoreProvider>
    );
}
