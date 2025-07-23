import {getUsers} from "@/app/services/api";
import {columns} from "@/app/services/column";
import BasicTable from "@/app/ui/data-table/data-table";

export default async function Home() {

    const data = await getUsers();

    return (
        <div className={"flex justify-center"}>
            <BasicTable data={data} columns={columns}/>
        </div>
    );
}
