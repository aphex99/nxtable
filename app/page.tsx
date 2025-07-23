import {getUsers} from "@/app/services";
import {columns} from "@/app/services/column";
import {DataTable} from "@/app/ui/components/data-table/data-table";

export default async function Home() {

    const data = await getUsers();

    return (
        <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <DataTable columns={columns} data={data}/>
        </div>
    );
}
